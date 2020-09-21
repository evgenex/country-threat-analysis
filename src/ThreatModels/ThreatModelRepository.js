import httpGateway from "../shared/HttpGateway";

class ThreatModelRepository {
  loadModel = async () => {
    const modelDto = await httpGateway.get("threatModel");
    const programmersModel = {
      name: modelDto.threatModel.name,
      riskFactors: modelDto.threatModel.riskFactors,
      ratings: modelDto.threatModel.ratings
    };
    return programmersModel;
  };
}

const threatModelRepository = new ThreatModelRepository();
export default threatModelRepository;
