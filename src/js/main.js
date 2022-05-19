  // 1 --- СКРЫВАТЬ НЕНУЖНЫЕ ТАБЫ УДАЛИТЬ КЛАСС АКТИВНОСТИ
  // 2 --- ПОКАЗАТЬ НУЖНЫЙ ТАБ --- ПЕРВЫЙ ---
  // 3 --- НАЗНАЧИТЬ ОБРАБОТЧИК СОБЫТИЙ
  // 4 --- ВЫЧИСЛЯТЬ СКОЛЬКО ОСТАЛОСЬ ВРЕМЕНИ РАЗНИЦУ
  // 5 --- ПОЛУЧАТЬ ЭЛЕМЕНТЫ И ЧТО-ТО С НИМИ ДЕЛАТЬ
  // 6 --- ОБНОВЛЕНИЯ ТАЙМЕРА 
 
'use strict';  
  
document.addEventListener('DOMContentLoaded', () => {

//    Tabs

      const tabs = document.querySelectorAll('.tabheader__item'),
            tabsContent = document.querySelectorAll('.tabcontent'),
            tabsParent = document.querySelector('.tabheader__items');
      
        function hideTabContent () {
          tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
          });
          tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
          });
        }
        function showTabContent (i = 0) {
          tabsContent[i].classList.add('show', 'fade');
          tabsContent[i].classList.remove('hide');
          tabs[i].classList.add('tabheader__item_active');
        }
        hideTabContent();
        showTabContent();

        tabsParent.addEventListener('click', (event) => {
          const target = event.target;
          if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
              if (target == item) {
                hideTabContent();
                showTabContent(i);
              }
            });
          }
        });

        // Timer 
        
        const deadline = '2022-05-21';

        function getTimeRemaining(endTime) {
          let days, hours, minutes, seconds;
              const t = Date.parse(endTime) - Date.parse(new Date());

          if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
          } else {
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/1000/60) % 60 );
          
          }   
                     
              return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
              };
        }

      function getZero(num) {
        if (num >= 0 && num < 10) {
          return `0${num}`;
        } else {
          return num;
        }
      }

      function setClock (selector, endTime) {
            const timer = document.querySelector(selector),
                  days = timer.querySelector('#days'),
                  hours = timer.querySelector('#hours'),
                  minutes = timer.querySelector('#minutes'),
                  seconds = timer.querySelector('#seconds'),
                  timerInterval = setInterval(updateClock, 1000);

            updateClock();

        function updateClock() {
            const t = getTimeRemaining(endTime);
              days.innerHTML = getZero(t.days);
              hours.innerHTML = getZero(t.hours);
              minutes.innerHTML = getZero(t.minutes);
              seconds.innerHTML = getZero(t.seconds);

              if (t.total <= 0) {
                clearInterval(timerInterval);
              }
            }
      }     
      setClock('.timer', deadline);

  });


