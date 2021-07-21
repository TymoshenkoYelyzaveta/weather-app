const timeout = process.env.SLOWMO ? 30000 : 10000;

beforeAll(async () => {
    await page.setGeolocation({latitude: 39.923054, longitude: 130.451673})
    await page.goto(URL, {waitUntil: 'domcontentloaded'})
});

describe('Test header and title of the page', () => {
    test('Title of the page', async () => {
        const title = await page.title()
        expect(title).toBe('React App')
    }, timeout);
});
