const arrWords = ['стакан', 'диван', 'матрас',  'палас', 'мотор'];

function generateWord (hidenWord) {
  const num = Math.floor(Math.random() * hidenWord.length);
  return  hidenWord[num];

}
console.log(generateWord(arrWords));
