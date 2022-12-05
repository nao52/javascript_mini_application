const addMemoButton = document.querySelector('.add-memo');
addMemoButton.addEventListener('click', () => {
  const newMemoInput = document.querySelector('.new-memo');
  if (!newMemoInput.value) {
    alert('文字を入力してください');
    return;
  }

  const newMemo = document.createElement('li');
  newMemo.textContent = newMemoInput.value;

  const memoList = document.querySelector('.memo-list');
  memoList.append(newMemo);

  newMemoInput.value = '';
});