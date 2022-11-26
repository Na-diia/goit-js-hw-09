import Notiflix from 'notiflix';

const refs = {
  form:document.querySelector('.form'),
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
  
  const delayForm = event.target.delay.valueAsNumber;
  const stepForm = event.target.step.valueAsNumber;
  const amountForm = event.target.amount.valueAsNumber;

  for (let position = 0; position > 0; position +=1 ) {
    createPromise(position, delayForm);
    delayForm += stepForm;
  }
};

refs.form.addEventListener('submit', onSubmitForm);