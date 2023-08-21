const card = document.getElementById('card');
const cardTop = document.querySelector('.card-top');
const rotationThreshold = 50;

let isFlipped = false;

card.addEventListener('mouseenter', () => {
  if (!isFlipped) {
    card.style.transform = 'rotateY(180deg)';
    isFlipped = true;

    setTimeout(() => {
      if (isFlipped) {
        const cardLogo = cardTop.querySelector('.card-logo');
        const cardNetwork = cardTop.querySelector('.card-network');

        cardLogo.style.opacity = '0';
        cardNetwork.style.opacity = '0';

        // Remover <h1> existente, se houver
        const existingH1 = cardTop.querySelector('h1');
        if (existingH1) {
          cardTop.removeChild(existingH1);
        }

        const cardInfoContainer = document.createElement('div');
        cardInfoContainer.classList.add('card-info-container');
        cardTop.appendChild(cardInfoContainer);

        const cvcAndValidThru = document.createElement('p');
        cvcAndValidThru.textContent = 'CVC 666 Valid 12/35'; 
        cvcAndValidThru.classList.add('card-info-text', 'cvc-valid-text');
        cardInfoContainer.appendChild(cvcAndValidThru);

        const cardNumber = document.createElement('p');
        cardNumber.textContent = '1337 1337 1337 0000'; 
        cardNumber.classList.add('card-info-text', 'card-number-text'); 
        cardInfoContainer.appendChild(cardNumber);
      }
    }, (rotationThreshold / 180) * 1000);
  }
});

card.addEventListener('mouseleave', () => {
  if (isFlipped) {
    card.style.transform = 'rotateY(0deg)';
    const cardLogo = cardTop.querySelector('.card-logo');
    const cardNetwork = cardTop.querySelector('.card-network');

    cardLogo.style.opacity = '0'; 
    cardNetwork.style.opacity = '0'; 

    isFlipped = false;


    setTimeout(() => {
      const cardInfoContainer = cardTop.querySelector('.card-info-container');
      if (cardInfoContainer) {
        cardTop.removeChild(cardInfoContainer);
      }
    }, (rotationThreshold / 180) * 1000);
    
    setTimeout(() => {
      cardLogo.style.opacity = '1';
      cardNetwork.style.opacity = '1';
    }, ((95 - rotationThreshold) / 180) * 1000);
  }
});
