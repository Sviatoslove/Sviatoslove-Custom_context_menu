import { Module } from '../core/module'

export class ClicksModule extends Module {
    trigger() {
        let clicks = 0;

        // Шаблон предупреждения и объявления результатов
        const warning = document.createElement('div');
        warning.style.width = 'max-content';
        warning.style.color = 'black';
        warning.style.background = 'red';
        warning.style.borderRadius = '5px';
        warning.style.border = '1 px solid black';
        warning.style.margin = 'auto';
        warning.style.padding = '15px';
        warning.style.textAlign = 'center';
        warning.style.fontSize = '30px';
        warning.style.fontWeight = 'bold';
        warning.style.fontFamily = 'impact'
        warning.textContent = '3'
        warning.className - 'warning'
        document.body.append(warning)

        // Обратный отсчет
        setTimeout(() => {
            warning.textContent = '2'
        }, 1000)

        setTimeout(() => {
            warning.textContent = '1'
        }, 2000)

        // Команда старта и обнуление кол-ва кликов
        setTimeout(() => {
            warning.textContent = 'Начали!';
            warning.style.background = 'rgba(0, 255, 68, 0.528)';
            clicks = 0
        }, 3000)

        // Объявление результата кликов за 3 сек (активируется после 3-й секунды со старта программы)
        setTimeout(() => {
            warning.textContent = `${clicks} кликов`;
            warning.style.background = 'black';
            warning.style.color = 'white';
            warning.style.letterSpacing = '3px'

            // Кнопка закрытия окна
            const clickerButton = document.createElement('button')
            clickerButton.className = 'clicker-button'
            clickerButton.style.display = 'block';
            clickerButton.style.margin = 'auto';
            clickerButton.style.fontSize = '16px'
            clickerButton.style.marginTop = '10px'
            clickerButton.style.fontFamily = 'impact'
            clickerButton.style.padding = '3px';
            clickerButton.style.cursor = 'pointer'
            clickerButton.textContent = 'Закрыть';
            clickerButton.style.letterSpacing = '1px'
            warning.append(clickerButton)

            // Слушатель на кнопку для закрытия окна
            clickerButton.addEventListener('click', () => {
                warning.remove()
            })
        }, 6000)

        // Подсчет ВСЕХ кликов 
        document.addEventListener('click', () => {
            clicks++
        })
    }
}
