const fs = require('fs');
const path = './ebooks.json';

// Exemple de nouveau ebook à ajouter
const newEbook = {
  "title": "Nouveau eBook",
  "description": "Description ici",
  "cover": "images/cover-new.png",
  "link": "https://drive.google.com/..."
};

// Lire le fichier ebooks.json
let ebooks = [];
if (fs.existsSync(path)) {
    const data = fs.readFileSync(path, 'utf8');
    ebooks = JSON.parse(data);
}

// Ajouter le nouvel ebook
ebooks.push(newEbook);

// Écrire le fichier ebooks.json mis à jour
fs.writeFileSync(path, JSON.stringify(ebooks, null, 2));
console.log('ebooks.json mis à jour avec succès !');
