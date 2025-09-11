fetch('ebooks.json')
  .then(res => res.json())
  .then(data => {
    const container = document.querySelector('.cards');
    data.forEach(ebook => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${ebook.cover}" alt="Couverture ${ebook.title}">
        <h3>${ebook.title}</h3>
        <p>${ebook.description}</p>
        <a href="${ebook.link}" class="btn">Télécharger</a>
      `;
      container.appendChild(card);
    });
  });
