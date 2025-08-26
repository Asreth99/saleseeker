import { chromium, type Browser, type BrowserContext, type Page } from 'patchright';
import { Ingatlancom } from '../scrape_pages/ingatlancom.ts';


async function main(type: string) {
    let page: Page;
    let browser: Browser;
    let context: BrowserContext;
    
    browser = await chromium.launch({headless: false});
    context = await browser.newContext({
        viewport: { width: 1280, height: 800 },
    });
    page = await context.newPage();
    
    const ingatlan = new Ingatlancom(page, type);   
    console.log('Pausing...');
    await page.pause();

    await ingatlan.scrapeIngatlanCom();
    await browser.close();
}


const type = process.argv[2] || "kiado";
main(type);