import httpGateway from "../shared/HttpGateway";

class CountriesRepository {
  loadModel = async () => {
    const countriesDto = await httpGateway.get("countries");
    const countries = countriesDto.data.map((country) => {
      return { ...country };
    });
    return countries;
  };
}

const countriesRepository = new CountriesRepository();
export default countriesRepository;
