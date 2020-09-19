import httpGateway from "../Shared/HttpGateway";
import Observable from "../Shared/Observable";

class CountriesRepository {
  programmersModel = new Observable([]);

  getCounties = async (callback) => {
    this.programmersModel.subscribe(callback);
    await this.loadModel();
    this.programmersModel.notify();
  };

  loadModel = async () => {
    const countriesDto = await httpGateway.get("countries");
    this.programmersModel.value = countriesDto.data.map((country) => {
      return { ...country };
    });
  };
}

const countriesRepository = new CountriesRepository();
export default countriesRepository;
