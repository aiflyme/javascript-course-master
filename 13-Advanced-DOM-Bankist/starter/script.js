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
console.log(document.head);
console.log(document.body);
const header = document.querySelector('.header');

//Nodelist 当删除一个class section,allSections不会变化
const allSections = document.querySelectorAll('.section');
// .forEach(e => {
//   console.log(e.tagName);
//});
console.log(allSections);

document.getElementById('section--1');
//HTMLCollection 当删除一个button,allbuttons也会变化
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

//HTMLCollection
const classBtn = document.getElementsByClassName('btn');
console.log(classBtn);

//Creating and inserting elements
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics.  <button class="btn btn--close-cookie">Got it!</button>';

//header.prepend(message);
header.append(message); //just use once

// header.append(message.cloneNode(true)); //use many times you need use clone

// header.before(message);
// header.after(message);

//Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    //message.parentElement.remove();
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
console.log(logo);

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
console.log(logo.dataset.group);

//Classes
logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
logo.classList.toggle('c');

console.log(logo.classList.contains('c'));

//Don't use
// logo.className = 'Robin';

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

  // window.scrollTo(
  //   s1coords.left + window.scrollX, //    //pageXOffset
  //   s1coords.top + window.scrollY
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

//189 Types of events and event handlers
const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', e => {
  console.log('You are reading the heading :D');
});

// h1.onmouseenter = e => {
//   alert('have a good day');
// };

//190 Event Propagation_Bubbling and Capturing

//191 Event Propagation Practice
// rgb(255,255,255)
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor(0, 255));

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('nav__link', e.target, e.currentTarget);

//   //Stop propagation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('nav__links', e.target, e.currentTarget);
//   // console.log('link2');
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('nav', e.target, e.currentTarget);
// });

//192 Event Delegation_Implementing Page Navigation
// document.querySelectorAll('.nav__link').forEach(ele => {
//   ele.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//1. Add event listener to common parent element

//2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();
  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//193 DOM Traversing
//const h1 = document.querySelector('h1');
//Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes); //nodelist
console.log(h1.children); //htmlconnection

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

//same
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
console.log(h1.parentElement.childNodes);
[...h1.parentElement.children].forEach(e => {
  if (e !== h1) e.style.transform = 'scale(0.5)';
  console.log(Math.random());
});

//194 Building a Tabbed Component
const operationsTab = document.querySelectorAll('.operations__tab');
const operationsTabContainer = document.querySelector(
  '.operations__tab-container'
);
const operationsContent = document.querySelectorAll('.operations__content');

//method 1
// operationsTab.forEach(function (ele) {
//   //cancel all button
//   ele.addEventListener('click', e => {
//     //get tab value
//     const tabValue = ele.dataset.tab;
//     console.log(tabValue);

//     operationsTab.forEach(function (ele) {
//       if (ele.classList.contains('operations__tab--active'))
//         ele.classList.remove('operations__tab--active');
//     });

//     //active the click button
//     ele.classList.add('operations__tab--active');

//     //hidden the activity content
//     operationsContent.forEach(eleContent => {
//       if (eleContent.classList.contains('operations__content--active'))
//         eleContent.classList.remove('operations__content--active');
//     });

//     //show the click content
//     const operationsContentTab = document.querySelector(
//       '.operations__content--' + tabValue
//     );
//     operationsContentTab.classList.add('operations__content--active');
//   });
// });

//methoc2
operationsTabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  //Guard clause
  if (!clicked) return;

  operationsTab.forEach(t => t.classList.remove('operations__tab--active'));

  operationsContent.forEach(c =>
    c.classList.remove('operations__content--active')
  );

  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//195 Passing Arguments o Event Handlers
const nav = document.querySelector('.nav');

const handleHover = function (e) {
  // console.log(this);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');

    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });
// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//196 Implementing a Sticky Navigation The Scroll Event
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

console.log(window.scrollY, initialCoords.top);
window.addEventListener('scroll', function (e) {
  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
