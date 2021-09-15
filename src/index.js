import _ from 'lodash';
import './style.css';
import logo from './logo.jpeg';
import logo2 from './F66F1B12-EEE3-4FF6-A115-E7931D6DA55E.jpeg';

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!!'];
  element.innerHTML = _.join(array, ' ');
  return element;
}

document.body.appendChild(component());
document.body.classList.add('haikei');

const image = new Image();
image.src = logo2;
document.body.appendChild(image);
