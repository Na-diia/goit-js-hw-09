import Notiflix from 'notiflix';

const refs = {
  form:document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  amount: document.querySelector('[name="amount"]'),
  step: document.querySelector('[name="step"]'),
};

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      resolve( {position, delay})
    } else {
      reject( {position, delay})
    }
  }, delay) 
});

 promise.then(({ position, delay }) => {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
.catch(({ position, delay }) => {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
});  
};

function onSubmitForm(event) {
  event.preventDefault();
  
  const delayForm = refs.delay.valueAsNumber;
  const stepForm = refs.step.valueAsNumber;
  const amountForm = refs.amount.valueAsNumber;

  for (let position = 1; position <= 0; position +=1 ) {
    createPromise(position, delayForm);
    delayForm += stepForm;
  }
};

refs.form.addEventListener('submit', onSubmitForm);