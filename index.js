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

function game() {
  const arrWords = ['стакан', 'диван', 'матрас',  'палас', 'мотор', 'пылесос', 'квартира', 'репозиторий'];
  const player = document.getElementById('player');
  const button = document.getElementById('btn');
  const input = document.getElementById('input');
  const wrapper = document.getElementById('word_wrapper');
  const guessWord = generateWord(arrWords);
  let userError = 1;
  showNumbersLettersWord(guessWord);

  button.addEventListener('click', btnClickHandler);

  function btnClickHandler() {
    const inputValue = getInputData(input);
      isLetterInWord(guessWord, inputValue);
      if (userError === 4) {
        button.removeEventListener('click', btnClickHandler);
        showPopUp(`Вы проиграли, верное слово было ${guessWord}`);
      }
      if (isGuessedWord()) {
        button.removeEventListener('click', btnClickHandler);
        showPopUp(`Вы выйграли, отгадав слово ${guessWord}`);
      }
    input.value = '';
  }
  function showPopUp(message) {
    const gameWrapper = document.getElementById('game');
    const popup = document.createElement('div');
    popup.classList.add('popup');
    const textContainer = document.createElement('p');
    const btn = document.createElement('button');
    btn.addEventListener('click', () => {
      popup.remove();
      wrapper.textContent = '';
      player.src = `./img/1.png`
      return game();
    })

    popup.append(textContainer, btn);

    textContainer.textContent = message;
    btn.textContent = 'Начать заново';
    gameWrapper.append(popup);
  }
  function isGuessedWord() {
    const listSpanContainer = Array.from(document.getElementsByClassName('letterContainer'));
    return listSpanContainer.every(item => item.textContent !== '-');
  }
  function getInputData () {
    return input.value;
  }

  function generateWord (arrWords) {
    const num = Math.floor(Math.random() * arrWords.length);
    console.log(num)
    return  arrWords[num];


  }

  function showNumbersLettersWord (guessWord) {

    guessWord.split('').forEach(() => {
      const span = document.createElement('span');
      span.classList.add('letterContainer');
      span.textContent = '-';
      wrapper.append(span);
    });
  }
  function isLetterInWord(word, guessLetter) {
    word.split('').forEach((item, index) => {
      if (item === guessLetter) {
        showHiddenLetter(guessLetter, index);
      }
    });
    if (!word.includes(guessLetter)) {
      takeLife();
    }

  }

  function takeLife() {
    userError++;
    player.src = `./img/${userError}.png`;
    
  }

  function showHiddenLetter(guessLetter, index) {
    const letterContainer = document.getElementsByClassName('letterContainer')[index];
    letterContainer.textContent = guessLetter;
  }

}

game();



