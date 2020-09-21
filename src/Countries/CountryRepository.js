import httpGateway from "../shared/HttpGateway";

export default class CountriesRepository {
  loadModel = async () => {
    const countriesDto = await httpGateway.get("countries");
    const countries = countriesDto.data.map((country) => {
      return { ...country };
    });
    return countries;
  };
}
