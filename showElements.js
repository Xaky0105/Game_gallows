import { hintWrapper } from "./constants.js"

export function showNumbersLettersWord (guessWord) {
    const wrapper = document.getElementById('word_wrapper');
    guessWord.split('').forEach(() => {
        const span = document.createElement('span');
        span.classList.add('letterContainer');
        span.textContent = '-';
        wrapper.append(span);
    });
}

export function showHiddenLetter(guessLetter, index) {
    const letterContainer = document.getElementsByClassName('letterContainer')[index];
    letterContainer.textContent = guessLetter;
}

export function changeImage() {
    let userError = 1;
    return function takeLife() {
        userError === 4 ? userError = 1 : userError;
        player.src = `./img/${++userError}.png`;
        return userError;
    }
}

export function showHint(hint) {
    const hintContainer = document.createElement('span');
    hintContainer.textContent = `Подсказка: ${hint}`;
    hintWrapper.append(hintContainer);
}
export const takeLife = changeImage();