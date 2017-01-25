import '../styles/image-viewer.css';

const image = document.createElement('img');
image.src = 'http://lorempixel.com/400/400';

console.log('document',document.body);
document.body.appendChild(image);
