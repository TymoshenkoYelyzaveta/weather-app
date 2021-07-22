import { hoursGroupedByDate } from "../helpers/hoursGroupedByDate"

const mockData = [{ dt: 1626969600 }, { dt: 1627081200 }, { dt: 1627138800 }]
const expectedData = {
    22: [{ dt: 1626969600 }],
    24: [{ dt: 1627081200 }, { dt: 1627138800 }],
}

describe("Hourly forecast data", () => {
    it("checks if hours records are grouped by date", () => {
        expect(hoursGroupedByDate(mockData, "D")).toStrictEqual(expectedData)
    })
})
