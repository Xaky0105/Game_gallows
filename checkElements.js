import { takeLife, showHiddenLetter } from './showElements.js';

export function isGuessedWord() {
    const listSpanContainer = Array.from(document.getElementsByClassName('letterContainer'));
    return listSpanContainer.every(item => item.textContent !== '-');
}
export function isLetterInWord(word, guessLetter) {
    word.split('').forEach((item, index) => {
        if (item === guessLetter) {
            showHiddenLetter(guessLetter, index);
        }
    });
    if (!word.includes(guessLetter)) {
        takeLife();
    }
}
