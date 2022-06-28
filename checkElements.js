import { player, arrImages } from './constants.js';

export function isGuessedWord() {
    const listSpanContainer = Array.from(document.getElementsByClassName('letterContainer'));
    return listSpanContainer.every(item => item.textContent !== '-');
}

export function isPlayerLoose() {
    return player.src.includes(arrImages[arrImages.length - 1].replace('.', ''));
}
