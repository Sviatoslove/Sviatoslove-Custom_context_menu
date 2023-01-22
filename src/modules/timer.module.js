import { Module } from "../core/module";
import { createTimer, countDownTimer } from "../core/utils/createTimer";

export class TimerModule extends Module {
  constructor(type, text) {
    super(type, text);

    this.container = document.createElement('div')
    this.container.className = 'containerTimer'
  }

  trigger() {
   

    createTimer(this.container);

    countDownTimer();

    const refreshId = setInterval(() => {
      console.log('setInterval')
    countDownTimer(refreshId)
    }, 500);
  }
}
