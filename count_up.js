const countupButton = document.querySelector('.countup');
const countdownButton = document.querySelector('.countdown');
const countclearButton = document.querySelector('.countclear');

countupButton.addEventListener('click', () => {
  const counter = document.querySelector('.counter');
  const currentCount = parseInt(counter.textContent);
  if (currentCount === 10) {
    alert('10以上のカウントはできません');
    return;
  }
  counter.textContent = currentCount + 1;
});

countdownButton.addEventListener('click', () => {
  const counter = document.querySelector('.counter');
  const currentCount = parseInt(counter.textContent);
  if (currentCount === 0) {
    alert('0以下のカウントはできません');
    return;
  }
  counter.textContent = currentCount - 1;
});

countclearButton.addEventListener('click', () => {
  const counter = document.querySelector('.counter');
  counter.textContent = 0;
});