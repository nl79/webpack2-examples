const button = document.createElement('button');
button.innerText = 'Click Me';
button.onclick = () => {
  // Load other modules after the button click.
  System.import('./image-viewer').then(module => {
    module.default();
  });
};

document.body.appendChild(button);