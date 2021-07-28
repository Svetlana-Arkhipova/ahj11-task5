import puppeteer from 'puppeteer';

jest.setTimeout(30000);
describe('popover', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });
  test('show popover', async () => {
    await page.goto(baseUrl);
    const btn = await page.$('.popover-btn');
    btn.click();
    await page.waitForSelector('div.popover');
    btn.click();
    await page.waitForSelector('div.popover.hidden');
  });
});
