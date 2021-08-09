const { BigIntStats } = require('fs');

// const refs = {
//   modal: document.querySelector('#subscription-modal'),
//   subscribeBtn: document.querySelector('button[data-subscribe]'),
// };
// const PROMPT_DELAY = 2000;
// const MAX_PROMPT_ATTEMPTS = 3;
// let promptCounter = 0;
// let hasSubsribed = false;
// const modal = new BSN.Modal('#subscription-modal');
// openModal();

// refs.modal.addEventListener('hide.bs.modal', openModal);
// refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

// function openModal() {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubsribed) {
//     return;
//   }
//   setTimeout(() => {
//     console.log('Відкриваємо надоїдалку');
//     modal.show();
//     promptCounter += 1;
//   }, PROMPT_DELAY);
// }
// function onSubscribeBtnClick() {
//   hasSubsribed = true;
//   modal.hide();
// }
