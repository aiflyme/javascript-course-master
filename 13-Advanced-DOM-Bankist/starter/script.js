'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(ele => {
  ele.addEventListener('click', openModal);
});

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//186 Selecting, Creating, and Deleting Elements
console.log(document.documentElement);
const header = document.querySelector('.header');

//Nodelist 当删除一个class section,allSections不会变化
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
//HTMLCollection 当删除一个button,allbuttons也会变化
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

//
const classBtn = document.getElementsByClassName('btn');
console.log(classBtn);

//Creating and inserting elements
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message); //just use once

// header.append(message.cloneNode(true));  //use many times you need use clone

// header.before(message);
// header.after(message);

//Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    //message.remove();
    message.parentElement.remove(message);
  });

//187 Styles, Attributes and Classes
//Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height);
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt, logo.src, logo.designer, logo.className);

//Non-standard
console.log(logo.designer); // undefined  //not working
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.getAttribute('src'), logo.src);

const link = document.querySelector('.twitter-link');
console.log(link.href, link.getAttribute('href'));

const link2 = document.querySelector('.nav__link--btn');
console.log(link2.href, link2.getAttribute('href'));

//Data 重要
console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

//Don't use
logo.className = 'Robin';

//188 Implementing Smooth Scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  console.log(
    'Height/Width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  window.scrollTo(s1coords.left, s1coords.top);
});
