import { isArrayLike } from 'mobx';
import CountriesPresenter from './CountriesPresenter';

const countriesPresenter = new CountriesPresenter();

it("test loading data", async () => {
    const data = await countriesPresenter.load();
    expect(Array.isArray(data)).toBe(true);
    expect(data[0]).toHaveProperty('countryCode');
    expect(data[0]).toHaveProperty('countryName');
});
