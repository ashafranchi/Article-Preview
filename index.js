const shareBtn = document.querySelector('.share-button');
const shareBtnsWrapper = document.querySelector('.share-wrapper');

shareBtn.addEventListener('click', function (e) {
  e.preventDefault();
  shareBtnsWrapper.classList.toggle('share-wrapper-display');
});