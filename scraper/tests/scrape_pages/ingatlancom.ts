import type { Page } from "patchright";
import {test, expect } from "playwright/test";

export class Ingatlancom {

    readonly type: string;
  /*   readonly city!: string;
    readonly price!: number; */
    readonly page: Page

    constructor (page: Page, type: string){
        this.page = page
        this.type = type;
    }

    async scrapeIngatlanCom(){
        await this.page.goto(`https://ingatlan.com/lista/${this.type}+lakas`);
        await expect(this.page.getByRole('button', { name: 'Összes süti engedélyezése' })).toBeTruthy();
        await this.page.getByRole('button', { name: 'Összes süti engedélyezése' }).click();

        await this.page.getByTestId('searcher-input').click();
        await this.page.getByTestId('autosuggest-input').fill('Budapest');
        await this.page.getByTestId('searcher-input').press('Enter');
        await this.page.getByRole('button', { name: 'Rendben' }).click();
        await this.page.pause();
    }


}