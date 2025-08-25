import { test, expect } from '@playwright/test';
import { chromium, Browser, BrowserContext, Page } from 'patchright';
import { Ingatlancom } from './scrape_pages/ingatlancom';

let page: Page;
let browser: Browser;
let context: BrowserContext;
let type: string = 'kiado';

test.beforeAll(async () => {
 
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });
  page = await context.newPage();

});

test.afterAll(async () => {
  await browser.close();
});


test.describe('Scrape', () => {

  test('Scrape Ingatlancom', { tag: ['@scrape'] }, async () => {
    const ingatlan = new Ingatlancom(page, "kiado");
    await ingatlan.scrapeIngatlanCom();
  });

  

});


