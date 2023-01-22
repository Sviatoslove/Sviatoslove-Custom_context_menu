import "./styles.css";
import { TimerModule } from "./modules/timer.module";

const app = new TimerModule("click", "Таймер отсчета");
app.trigger();
