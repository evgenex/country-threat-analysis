import { observable, action } from "mobx";
import ThreatModelPresenter from "./ThreatModels/ThreatModelPresenter";
import CountriesPresenter from "./Countries/CountriesPresenter";
import AssessmentPresenter from "./Assessment/AssessmentPresenter";

const threatModelPresenter = new ThreatModelPresenter();
const countryPresenter = new CountriesPresenter();
const assessmentPresenter = new AssessmentPresenter()

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
  @observable name = 'John';

  @action
  loadThreatModel = async()=> {
    const viewModel = await threatModelPresenter.load();
    this.localThreatModel = viewModel;
  }
  @action
  loadCountry = async()=> {
    const viewModel = await countryPresenter.load();
    this.localCountries = viewModel;
  }
  @action
  loadAssessment = async(countryCode)=> {
    const threatRatings =  this.localThreatModel.threatRatings;
    const currentAssessment = await assessmentPresenter.load(countryCode, threatRatings);
    this.selectedCountry = currentAssessment;
  }
}