'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnOpenModal.forEach(ele => {
  ele.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.code === 'Escape' || e.code === 'Space') {
    e.preventDefault(); // 可选：防止页面滚动
    closeModal();
  }
});

// const openModal = () => {
//   momal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = () => {
//   momal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnOpenModal.length; i++) {
//   btnOpenModal[i].addEventListener('click', openModal);
// }

// btnCloseModal.addEventListener('click', closeModal);
// document.addEventListener('keydown', e => {
//   if (e.key === 'Escape' && !momal.classList.contains('hidden')) closeModal();
// });
