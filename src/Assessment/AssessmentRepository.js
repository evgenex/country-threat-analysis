import httpGateway from "../shared/HttpGateway";

class AssessmentRepository {
  loadModel = async (countryCode) => {
    const localAssesment = await httpGateway.get(`countries/${countryCode}?include=assessment`);
    return localAssesment;
  };
}
const assessmentRepository = new AssessmentRepository();
export default assessmentRepository;
  