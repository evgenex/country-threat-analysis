import { observable, action } from "mobx";
import ThreatModelPresenter from "./ThreatModels/ThreatModelPresenter";
import CountriesPresenter from "./Countries/CountriesPresenter";
import httpGateway from "./shared/HttpGateway";

const threatModelPresenter = new ThreatModelPresenter();
const countryPresenter = new CountriesPresenter();

export default class Store {
  @observable localThreatModel = {
    name: "",
    threatFactors: [],
    threatRatings: []
  };
  @observable localCountries = [];
  @observable selectedCountry = {
    country: "",
    overallRating: "",
    riskFactors: [],
  };

  @action
  loadThreatModel = async()=> {
    await threatModelPresenter.load((viewModel) => {
      this.localThreatModel = viewModel;
    });
  }
  @action
  loadCountry = async()=> {
    await countryPresenter.load((viewModel) => {
      this.localCountries = viewModel;
    });
  }
  @action
  loadAssessment = async(countryCode)=> {
    const assessment = await httpGateway.get(`countries/${countryCode}?include=assessment`);
    const ratingId = assessment.threatAssessment.ratingId;
    const countryRating = this.localThreatModel.threatRatings.find((threat) => threat.id === ratingId);
    let riskFactors = [];
    assessment.threatAssessment.riskFactors.map((item)=>{
      const factor = {
        name: item.name,
        rating: this.localThreatModel.threatRatings.find((threat) => threat.id === item.ratingId),
      }
      riskFactors.push(factor);
    })
    const currentAssessment = {
      country: countryCode,
      overallRating: countryRating,
      riskFactors: riskFactors,
    }
    this.selectedCountry = currentAssessment;
  }
}