document.addEventListener("DOMContentLoaded", () => {
    fetch("ebooks.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("ebooks-list");
            data.forEach(ebook => {
                const card = document.createElement("div");
                card.className = "ebook-card";

                card.innerHTML = `
                    <img src="${ebook.cover}" alt="${ebook.title}" class="cover">
                    <h3>${ebook.title}</h3>
                    <a href="${ebook.file}" target="_blank" download>Télécharger</a>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => console.error("Erreur chargement ebooks :", error));
});
