import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
  btnStart: document.querySelector('button[data-start]'),
  addDate: document.querySelector('#datetime-picker'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  min: document.querySelector('span[data-minutes]'),
  sec: document.querySelector('span[data-seconds]'),
};

refs.btnStart.disabled = true;
let intervalId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);

      if(selectedDates[0] < new Date()) {
        Notiflix.Notify.failure('Please choose a date in the future');
        return;
      } else if(selectedDates[0] > new Date()) {
       refs.btnStart.disabled = false;
      };

      refs.btnStart.addEventListener('click', () => {
        intervalId = setInterval(() => {
        const timeLeft = selectedDates[0] - new Date(); 

        if(timeLeft < 1000) {
            clearInterval(intervalId);
        };
        
        const resultTime = convertMs(timeLeft);
        updateClockFace(resultTime);
        }, 1000);
        }
      );
    },
};

function updateClockFace( {days, hours, minutes, seconds} ) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.min.textContent = `${minutes}`;
    refs.sec.textContent = `${seconds}`;
};

function addLeadingZero(value) {
   return String(value).padStart(2, '0');
};

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
};

flatpickr('#datetime-picker', options);