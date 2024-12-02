'use strict';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const btnStart = document.querySelector('[data-start]');
btnStart.disabled = true;

let userSelectedDate;

const input = document.querySelector('#datetime-picker');
const options = {
  enableTime: true,
  time_24hr: false,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      btnStart.disabled = true;
      iziToast.show({
        theme: 'dark',
        iconUrl: '../img/icons/alert.svg',
        imageWidth: '24px',
        position: 'topRight',
        message: 'Please choose a date in the future',
        messageColor: '#fff',
        messageSize: '16px',
        messageLineHeight: '24px',
        backgroundColor: '#EF4040',
      });
    } else {
      userSelectedDate = selectedDates[0];
      btnStart.disabled = false;
    }
  },
  disableMobile: true,
  time_24hr: true,
};
const fp = flatpickr(input, options);

let isActive = false;
let intervalID;
let differenceBetweenTimes;

btnStart.addEventListener('click', handleTimer);
function handleTimer(event) {
  if (isActive) {
    return;
  }
  isActive = true;

  btnStart.disabled = true;
  input.disabled = true;

  intervalID = setInterval(() => {
    const currentTime = Date.now();
    differenceBetweenTimes = userSelectedDate.getTime() - currentTime;

    const time = convertMs(differenceBetweenTimes);

    displayDataInSpan(time);
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = padDay(Math.floor(ms / day));
  // Remaining hours
  const hours = padStart(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = padStart(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = padStart(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function padStart(value) {
  return String(value).padStart(2, '0');
}
function padDay(val) {
  return String(val).padStart(2 || userSelectedDate.getTime(), '0');
}
const daysOutput = document.querySelector('[data-days]');
const hoursOutput = document.querySelector('[data-hours]');
const minutesOutput = document.querySelector('[data-minutes]');
const secondsOutput = document.querySelector('[data-seconds]');

function displayDataInSpan({ days, hours, minutes, seconds }) {
  daysOutput.textContent = `${days}`;
  hoursOutput.textContent = `${hours}`;
  minutesOutput.textContent = `${minutes}`;
  secondsOutput.textContent = `${seconds}`;
  if (String(differenceBetweenTimes).length === 3) {
    stopTimer();
  }
}

function stopTimer() {
  clearInterval(intervalID);
  isActive = false;
  input.disabled = false;
}
