import ThreatModelPresenter from './ThreatModelPresenter';

const threatModelPresenter = new ThreatModelPresenter();

it("test loading data", async () => {
    const data = await threatModelPresenter.load();
    const threatFactors = ["Political Instability", "Crime", "Activism", "Terrorism", "Espionage"];
    expect(data).toEqual(
        expect.objectContaining({
            pageTitle: expect.any(String),
            name: expect.any(String),
            threatFactors: expect.arrayContaining(threatFactors),
            threatRatings: expect.arrayContaining([
                expect.objectContaining({
                    colour: expect.any(String),
                    id: expect.any(String),
                    name: expect.any(String),
                    ranking: expect.any(Number),
                    })
                ]
            )
          })
    )
});
