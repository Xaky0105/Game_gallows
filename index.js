import { showPopUp } from './popUp.js';
import { showNumbersLettersWord, showHint, changeImage, showHiddenLetter } from './showElements.js';
import { generateWord, getInputData, counterCreator } from './utils.js';
import { arrWords, button, input} from './constants.js';
import { isGuessedWord, isPlayerLoose } from './checkElements.js';

export function game() {
    const {word, hint} = generateWord(arrWords);
    const counter = counterCreator();
    showHint(hint);
    showNumbersLettersWord(word);

    button.addEventListener('click', btnClickHandler);
    input.addEventListener('keydown', inputKeydownHandler);

    function inputKeydownHandler(e) {
        if (e.code === 'Enter') {
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
        if (!word.includes(inputValue)) {
            changeImage(counter);
        } else {
            word.split('').forEach((item, index) => {
                if (item === inputValue) {
                    showHiddenLetter(inputValue, index);
                }
            });
        }
        if (isPlayerLoose()) {
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



