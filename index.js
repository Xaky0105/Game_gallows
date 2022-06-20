//const arrWords = ['стакан', 'диван', 'матрас',  'палас', 'мотор'];

// 1.Написать функцию генератор слов 
// 2.Повесить обработчик событий на кнопку 
// 3.Написать функцию, которая будет получать данные из input 
// 4.Написать функцию, которая выводит кол-во букв в слове на экран(например слово машина, значит - - - - - -)
// 5.Написать функцию, которая будет проверять есть ли в отгадываемом слове буква, которую ввел пользователь 
// 6.Написать функцию, которая будет открывать букву
// 7.Написать фуекцию, которая будет менять изображение в случае ввода неправильной буквы 
// 8.Написать функцию, которая будет проверять отгадал ли пользователь слово(если отгадал, то возвращаем true, если есть хотя бы одна неотгаданная буква, то false) 
// 9.Написать функцию, которая будет создавать pop-up в случае победы
// 10.Написать функцию, которая будет создавать pop-up в случае поражения

function generateWord (arrWords) {
  const num = Math.floor(Math.random() * arrWords.length);
  return  arrWords[num];
//console.log(generateWord(arrWords))

const button = document.getElementById('btn');
const input = document.getElementById('input');
button.addEventListener('click', () => {
const inputValue = getInputData(input);
// console.log(inputValue);
});
function getInputData (input) {
  return input.value;
}

}
//console.log(generateWord(arrWords));
