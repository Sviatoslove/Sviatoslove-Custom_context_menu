import {Module} from '../core/module'
import * as functionStation from '../utils'

export class ShapeModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        const body = document.querySelector('body')
        let randomShape = Math.floor((Math.random() * 5) + 1);
        switch(randomShape) {
            case 1:
                functionStation.createRandomShape(body, 'circle')
            break
            case 2:
                functionStation.createRandomShape(body, 'square')
            break
            case 3:
                functionStation.createRandomShape(body, 'triangleUp')
            break
            case 4:
                functionStation.createRandomShape(body, 'triangleDown')
            break
            case 5:
                functionStation.createRandomShape(body, 'squareRadius')
            break
        }
    }
}