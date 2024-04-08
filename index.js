function addCard() {
    const cardContainer = document.getElementById('cardContainer');
    const number = document.getElementById('searchInput').value;
    const date = document.getElementById('dateInput').value;
    const info = document.getElementById('infoInput').value;
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div>${number}</div>
      <div>${date}</div>
      <div>${info}</div>
      <button onclick="deleteCard(this)">X</button>
    `;
    cardContainer.appendChild(card);
    saveToLocalStorage();
  }

  function deleteCard(btn) {
    const card = btn.parentElement;
    card.remove();
    saveToLocalStorage();
  }

  function saveToLocalStorage() {
    const cards = document.querySelectorAll('.card');
    const cardData = [];
    cards.forEach(card => {
      const number = card.querySelector('div:nth-child(1)').textContent;
      const date = card.querySelector('div:nth-child(2)').textContent;
      const info = card.querySelector('div:nth-child(3)').textContent;
      cardData.push({ number, date, info });
    });
    localStorage.setItem('cards', JSON.stringify(cardData));
  }

  function loadFromLocalStorage() {
    const cardContainer = document.getElementById('cardContainer');
    const cardsData = JSON.parse(localStorage.getItem('cards')) || [];
    cardsData.forEach(data => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div>${data.number}</div>
        <div>${data.date}</div>
        <div>${data.info}</div>
        <button onclick="deleteCard(this)">X</button>
      `;
      cardContainer.appendChild(card);
    });
  }

  loadFromLocalStorage();