function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  color: document.querySelector('.color'),
};
   
let timerId = null;

const changeColor = () => {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.body.style.color = getRandomHexColor();
  refs.color.textContent = getRandomHexColor();
};

function onBtnStartClick() {
  timerId = setInterval(changeColor, 1000);
  refs.btnStart.disabled = false;
};

const onBtnStopClick = () => {
  clearInterval(timerId);
  refs.btnStart.disabled = true;
};

refs.btnStart.addEventListener('click', onBtnStartClick);
refs.btnStop.addEventListener('click', onBtnStopClick);