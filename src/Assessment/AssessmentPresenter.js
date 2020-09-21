
import AssessmentRepository from "./AssessmentRepository";

const assessmentRepository = new AssessmentRepository();

export default class AssessmentPresenter {
    load = async (countryCode, threatRatings) => {
        const assessment = await assessmentRepository.loadModel(countryCode);
        const ratingId = assessment.threatAssessment.ratingId;
        const countryRating = threatRatings.find((threat) => threat.id === ratingId);
        let riskFactors = assessment.threatAssessment.riskFactors.map((item)=>{
          const factor = {
            name: item.name,
            rating: threatRatings.find((threat) => threat.id === item.ratingId),
          }
          return factor;
        })
        const currentAssessment = {
          country: countryCode,
          overallRating: countryRating,
          riskFactors: riskFactors,
        }
        return currentAssessment;
    };
  }