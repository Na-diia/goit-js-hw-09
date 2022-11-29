import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const refs = {
  form:document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  amount: document.querySelector('[name="amount"]'),
  step: document.querySelector('[name="step"]'),
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      resolve( {position, delay})
    } else {
      reject( {position, delay})
    }
  }, delay) 
}); 
};

refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  
  let delayForm = refs.delay.valueAsNumber;
  const stepForm = refs.step.valueAsNumber;
  const amountForm = refs.amount.valueAsNumber;

  refs.form.reset();

  for (let position = 1; position <= amountForm; position +=1 ) {
    createPromise(position, delayForm)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    }); 
    delayForm += stepForm;
  }
};