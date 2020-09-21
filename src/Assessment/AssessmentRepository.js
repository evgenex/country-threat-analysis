import httpGateway from "../shared/HttpGateway";

export default class AssessmentRepository {
  loadModel = async (countryCode) => {
    const localAssesment = await httpGateway.get(`countries/${countryCode}?include=assessment`);
    return localAssesment;
  };
}

  