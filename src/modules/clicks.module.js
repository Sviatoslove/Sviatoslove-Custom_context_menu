import { Module } from '../core/module'
import { runClickerTimer } from '../utils';



export class ClicksModule extends Module {
    constructor (type, text) {
        super(type, text)

        this.warning = document.createElement('div');
        this.clickerButton = document.createElement('button');
        this.time = 0;
        this.clicks = 0;
    }
    trigger() {
        runClickerTimer(this.warning, this.clickerButton, this.time, this.clicks)
    }
}
