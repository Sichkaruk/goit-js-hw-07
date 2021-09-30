/*
Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
*/

const incBtnEl = document.querySelector('[data-action="increment"]');
const decBtnEl = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

function increment() {
  counterValue += 1;
  valueEl.textContent = counterValue;
  return valueEl;
}

function decrement() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
  return valueEl;
}

incBtnEl.addEventListener('click', increment);
decBtnEl.addEventListener('click', decrement);