import {game} from './index.js'
import {gameWrapper, wrapper, hintWrapper} from './constants.js'

export function showPopUp(message) {
    const popup = document.createElement('div');
    const textContainer = document.createElement('p');
    const btn = document.createElement('button');

    popup.classList.add('popup');
    popup.append(textContainer, btn);
    textContainer.textContent = message;
    btn.textContent = 'Начать заново';

    gameWrapper.append(popup);
    setTimeout(() => popup.style.opacity = 1); //// без сет таймаута почему-то не работает, можно подумать как сделать иначе

    btn.addEventListener('click', () => {
      popup.remove();
      wrapper.textContent = '';
      hintWrapper.textContent = '';
      player.src = `./img/1.png`
      return game();
    })
}