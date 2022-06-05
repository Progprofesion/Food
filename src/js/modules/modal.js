function modal () {
     // Modal

     const modalTrigger = document.querySelectorAll('[data-modal]'),     
     modal = document.querySelector('.modal');


     function openModal() {
       modal.classList.add('show');
       modal.classList.remove('hide');
       document.body.style.overflow = 'hidden';
       clearInterval(modalTimerId);
   }

 modalTrigger.forEach(btn => {
     btn.addEventListener('click', openModal);
   });



const modalTimerId = setTimeout(openModal, 5000000);
   
function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

 modal.addEventListener('click', (e) => {
   if(e.target === modal || e.target.getAttribute('data-close') == '') {
     closeModal();
   }
 });

 document.addEventListener('keydown', (e) => {
   if (e.code === 'Escape' && modal.classList.contains('show')) {
     closeModal();
   }
 });
   
 function showModalByScroll() {
   if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
                                               // вызов окна при скроле до футера
       openModal();
       window.removeEventListener('scroll', showModalByScroll);
   }
}
window.addEventListener('scroll', showModalByScroll);
}

export default modal;