import ThreatModelRepository from "./ThreatModelRepository";

const threatModelRepository = new ThreatModelRepository();

export default class ThreatModelPresenter {
  load = async () => {
    const threatModelPm = await threatModelRepository.loadModel()
    const threatModelVm = {
        name: threatModelPm.name,
        threatRatings: threatModelPm.ratings.map((rating) => {
          return {id: rating.id, name: rating.name, colour: rating.colour, ranking: rating.ranking };
        }),
        threatFactors: threatModelPm.riskFactors.map((factor) => factor.name),
        pageTitle: "Country Threat Analysis"
      };
    return threatModelVm;
  };
}
