import {Module} from '../core/module'
import { createRandomShape } from '../core/utils/shape'

export class ShapeModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        const body = document.querySelector('body')
        let randomShape = Math.floor((Math.random() * 5) + 1)
        switch(randomShape) {
            case 1:
                createRandomShape(body, 'circle')
            break
            case 2:
                createRandomShape(body, 'square')
            break
            case 3:
                createRandomShape(body, 'triangleUp')
            break
            case 4:
                createRandomShape(body, 'triangleDown')
            break
            case 5:
                createRandomShape(body, 'squareRadius')
            break
        }
    }
}