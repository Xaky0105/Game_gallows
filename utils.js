export function getInputData () {
    return input.value.toLowerCase();
}

export function generateWord (arrWords) {
    const num = Math.floor(Math.random() * arrWords.length);
    return  arrWords[num];
}
