import { Module } from "../core/module";
import { createTimer } from "../core/utils/createTimer";

export class TimerModule extends Module {
  constructor(type, text) {
    super(type, text);
    // createTimer();
  }

  trigger() {
    createTimer();
  }
}
