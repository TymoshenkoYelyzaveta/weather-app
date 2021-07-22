const timeout = process.env.SLOWMO ? 30000 : 10000

const URL = "http://localhost:3000"

let context = null

beforeAll(async () => {
    context = browser.defaultBrowserContext()
    context.overridePermissions(URL, ['geolocation'])

    await page.goto(URL, {waitUntil: 'domcontentloaded'})
});

describe('Hourly forecast opens hourly forecast', () => {
    test('Menu link opens correct url', async () => {

        await page.$eval("#hourly-forecast", el => el.click())

        const pageUrl = await page.url()
        expect(pageUrl).toBe(`${URL}/hourly-forecast`)
    }, timeout)
})

afterAll( () => {
    context.clearPermissionOverrides()
})