import threatModelRepository from "./ThreatModelRepository";

export default class ThreatModelPresenter {
  load = async (callback) => {
    await threatModelRepository.getModel((threatModelPm) => {
      const threatModelVm = {
        name: threatModelPm.name,
        threatRatings: threatModelPm.ratings.map((rating) => {
          return {id: rating.id, name: rating.name, colour: rating.colour, ranking: rating.ranking };
        }),
        threatFactors: threatModelPm.riskFactors.map((factor) => factor.name),
        pageTitle: "Country Threat Analysis"
      };
      callback(threatModelVm);
    });
  };
}
