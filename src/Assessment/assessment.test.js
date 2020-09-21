import AssessmentPresenter from './AssessmentPresenter';

const assessmentPresenter = new AssessmentPresenter();

it("test loading data", async () => {
  const countryCode = "IDN";
  const threatRatings = [
    {
      id: "355072ba-819f-4099-b1b3-9ecef1c1d0a9",
      name: "Severe",
      ranking: 1,
      colour: "#fc2403"
    },
    {
      id: "a1c62ffd-627c-45bb-9790-a9fd2965d554",
      name: "High",
      ranking: 2,
      colour: "#851707"
    },
    {
      id: "682db998-60fb-4222-b2b2-44fc64bdd8a3",
      name: "Medium",
      ranking: 3,
      colour: "#402e2b"
    },
    {
      id: "d21761f1-2d5a-4691-b850-22a5bd63f048",
      name: "Low",
      ranking: 4,
      colour: "#777e85"
    }
  ]
  const data = await assessmentPresenter.load(countryCode, threatRatings);
  expect(data).toEqual(
    expect.objectContaining({
      country: expect.any(String),
      overallRating: expect.objectContaining({
            colour: expect.any(String),
            id: expect.any(String),
            name: expect.any(String),
            ranking: expect.any(Number),
        }),
    })
  )
  expect(data.riskFactors).toHaveLength(5)
})