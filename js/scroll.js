window.addEventListener('scroll', () => {
  const button = document.querySelector('.moveToTop');
  if (window.scrollY >= 1000) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});

const button = document.querySelector('.moveToTop');
button.addEventListener('click', () => {
  // スクロールの位置を操作する
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});