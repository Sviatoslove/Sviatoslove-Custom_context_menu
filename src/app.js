import "./styles.css";
import { TimerModule } from "./modules/timer.module";

const app = new TimerModule("timer", "Таймер отсчета");
document.addEventListener("click", () => {
  app.trigger();
});
