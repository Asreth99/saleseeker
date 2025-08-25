import { Page } from "patchright"

export class Ingatlancom {

    readonly type: string;
    readonly city: string
    readonly price: number;
    readonly page: Page

    constructor (page: Page, type: string){
        this.page = page
        this.type = type;
    }

    async scrapeIngatlanCom(){
        await this.page.goto(`https://ingatlan.com/lista/${this.type}+lakas`);
        await this.page.locator('iframe').nth(3).contentFrame().getByRole('button', { name: 'Összes süti engedélyezése' }).click();
        await this.page.pause();
    }


}