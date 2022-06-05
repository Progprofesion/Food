// 1 --- СКРЫВАТЬ НЕНУЖНЫЕ ТАБЫ УДАЛИТЬ КЛАСС АКТИВНОСТИ
// 2 --- ПОКАЗАТЬ НУЖНЫЙ ТАБ --- ПЕРВЫЙ ---
// 3 --- НАЗНАЧИТЬ ОБРАБОТЧИК СОБЫТИЙ
// 4 --- ВЫЧИСЛЯТЬ СКОЛЬКО ОСТАЛОСЬ ВРЕМЕНИ РАЗНИЦУ
// 5 --- ПОЛУЧАТЬ ЭЛЕМЕНТЫ И ЧТО-ТО С НИМИ ДЕЛАТЬ
// 6 --- ОБНОВЛЕНИЯ ТАЙМЕРА 

'use strict';  

import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import modal from './modules/modal';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';

document.addEventListener('DOMContentLoaded', () => {
  calc();
  cards();
  forms();
  modal();
  slider();
  tabs();
  timer();   
});


