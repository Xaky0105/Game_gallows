import { arrImages, hintWrapper, player } from "./constants.js";

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

export function showHint(hint) {
    const hintContainer = document.createElement('span');
    hintContainer.textContent = `Подсказка: ${hint}`;
    hintWrapper.append(hintContainer);
}

export function changeImage(counterFunc) {
    const counter = counterFunc();
    player.src = arrImages[counter];
}