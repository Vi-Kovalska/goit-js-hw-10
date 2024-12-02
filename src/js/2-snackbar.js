'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const inputDelay = document.querySelector('[name=delay]');

form.addEventListener('submit', handleCreatePromise);
function handleCreatePromise(event) {
  event.preventDefault();
  const delay = event.target.elements.delay.value;

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (event.target.elements.state.value === 'fulfilled') {
        resolve(`${delay}`);
      } else {
        reject(`${delay}`);
      }
    }, delay);
  })
    .then(data => {
      iziToast.show({
        theme: 'dark',
        iconUrl: '../img/icons/ok.svg',
        imageWidth: '24px',
        position: 'topRight',
        title: 'OK',
        message: `Fulfilled promise in ${data}ms`,
        messageColor: '#fff',
        messageSize: '16px',
        messageLineHeight: '24px',
        backgroundColor: '#59A10D',
      });
    })
    .catch(err => {
      iziToast.show({
        theme: 'dark',
        iconUrl: '../img/icons/alert.svg',
        imageWidth: '24px',
        position: 'topRight',
        title: 'Error',
        message: `Rejected promise in ${err}ms`,
        messageColor: '#fff',
        messageSize: '16px',
        messageLineHeight: '24px',
        backgroundColor: '#EF4040',
      });
    });
  inputDelay.value = '';
}
