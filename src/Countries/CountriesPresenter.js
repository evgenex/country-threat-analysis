import countriesRepository from "../Countries/CountryRepository";

export default class CountriesPresenter {
  load = async () => {
    const countriesPm = await countriesRepository.loadModel();
    const countriesVm = countriesPm.map((country) => {
        return { countryCode: country.code, countryName: country.name };
      });
    return countriesVm;
  };
}
