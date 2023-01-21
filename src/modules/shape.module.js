import {Module} from '../core/module'
import { getRandomColor } from '../utils'
import * as functionStation from '../utils'

export class ShapeModule extends Module {
    // starts
    // Случайная фигура - Создается случайная по размеру и цвету фигура в рандомном месте экрана.
    // В классе вашего модуля нужно реализовать метод trigger. Он запускает работу модуля. Внутри этого метода описана логика того, что будет происходить при клике.
    constructor(type, text) {
        super(type, text)
    }


    // realized method trigger from module
    trigger() {
        const body = document.querySelector('body')
        let randomShape = Math.floor((Math.random() * 2) + 1);
        if (randomShape == 1) {
            console.log("circle")
            functionStation.createRandomCircle()
        } else if (randomShape == 2) {
            console.log("square")
            functionStation.createRandomSquare()
        }
    }

}