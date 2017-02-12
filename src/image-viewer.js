import big from '../assets/big.jpeg';
import small from '../assets/small.jpeg';
import '../styles/image-viewer.css';

const image = document.createElement('img');
image.src = small;

const bigImage = document.createElement('img');
bigImage.src = big;

console.log('document',document.body);
document.body.appendChild(image);
document.body.appendChild(bigImage);
