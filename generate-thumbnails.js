const fs = require('fs');
const path = require('path');
const pdfThumbnail = require('pdf-thumbnail');

const pdfDir = './ebooks/';
const thumbDir = './images/thumbnails/';

if (!fs.existsSync(thumbDir)) {
  fs.mkdirSync(thumbDir, { recursive: true });
}

fs.readdirSync(pdfDir).forEach(file => {
  if (file.endsWith('.pdf')) {
    const pdfPath = path.join(pdfDir, file);
    const thumbPath = path.join(thumbDir, file.replace('.pdf', '.png'));
    pdfThumbnail(pdfPath).then(buffer => fs.writeFileSync(thumbPath, buffer));
  }
});
