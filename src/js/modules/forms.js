import {openModal, closeModal} from './modal';
import {postData} from '../services/services';


function forms (modalTimerId) {

   const forms = document.querySelectorAll('form');

   const messages = {
           loading: 'img/form/spinner.svg',
           succes: 'Спасибо! Скоро мы с вами свяжемсся',
           failure: 'Что-то пошло не так...'
         };

         forms.forEach(item => {
           bindPostData(item);
         });

   function bindPostData(form) {
     form.addEventListener('submit', (e) => {
       e.preventDefault();

       const statusMessages = document.createElement('img'); 
       statusMessages.src = messages.loading;
       statusMessages.style.cssText = `
       display: block;
       margin: 0 auto
       `;
       form.insertAdjacentElement('afterend', statusMessages);
       const formData = new FormData(form);

       const json = JSON.stringify(Object.fromEntries(formData.entries()));

       postData('http://localhost:3000/requests', json)
       // .then(data => data.text()) // ПРЕОБРАЗОВАТЬ В ТЕКСТ
       .then(data => {
           console.log(data);
           showThanksModal(messages.succes);
           statusMessages.remove();
       })
       .catch(() => {
         showThanksModal(messages.failure);
       })
       .finally(() => {
         form.reset();
       });
 });
}
   

   function showThanksModal(message) {
     const prevModalDialog = document.querySelector('.modal__dialog');

     prevModalDialog.classList.add('hide');
     openModal('.modal', modalTimerId);

       const thanksModal = document.createElement('div');
       thanksModal.classList.add('modal__dialog');
       thanksModal.innerHTML = `
           <div class="modal__content">
               <div class="modal__close" data-close>×</div>
               <div class="modal__title">${message}</div>
           </div>
       `;
       document.querySelector('.modal').append(thanksModal);
       setTimeout(() => {
           thanksModal.remove();
           prevModalDialog.classList.add('show');
           prevModalDialog.classList.remove('hide');
           closeModal('.modal');
       }, 4000);
   }
}

export default forms;