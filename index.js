import { showPopUp } from './popUp.js';
import { showNumbersLettersWord, showHint } from './showElements.js';
import { generateWord, getInputData } from './utils.js';
import { arrWords, player, button, input } from './constants.js';
import { isGuessedWord, isLetterInWord } from './checkElements.js';

export function game() {
    const {word, hint} = generateWord(arrWords);
    showHint(hint);
    showNumbersLettersWord(word);

    button.addEventListener('click', btnClickHandler);
    input.addEventListener('keydown', inputKeydownHandler);

    function inputKeydownHandler(e) {
        if (e.code === 'Enter') {
            console.log(e)
            btnClickHandler();
        }
    }

    function deleteEventListener() {
        button.removeEventListener('click', btnClickHandler);
        input.removeEventListener('keydown', inputKeydownHandler);
    }

    function btnClickHandler() {
        const inputValue = getInputData(input);
        input.value = '';
        isLetterInWord(word, inputValue);
        if (player.src.includes('img/4.png')) {
            deleteEventListener();
            showPopUp(`Вы проиграли. Верное слово - "${word.toUpperCase()}"`);
        }
        if (isGuessedWord()) {
            deleteEventListener();
            showPopUp(`Вы выйграли, отгадав слово "${word.toUpperCase()}"`);
        }
    }
}
game();



