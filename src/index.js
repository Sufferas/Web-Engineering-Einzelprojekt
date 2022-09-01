import _ from 'lodash';
import './style-folder/style.css';
import Icon from './logo.png';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const container = document.createElement('div');
  const container_inner = document.createElement('div');
  const row = document.createElement('div');
  const info= document.createElement('ul');
  const info_text= document.createElement('li');
  const text= document.createElement('a');


  // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  element.classList.add('top-bar');
  container.classList.add('container');
  container_inner.classList.add('container-inner');
  row.classList.add('row');
  info.classList.add('info');
  info_text.classList.add('info-text');
  text.href = 'http://google.com';
  text.innerText = 'Go to Google';


  element.appendChild(container);
  container.appendChild(container_inner);
  container_inner.appendChild(row);
  element.appendChild(info);
  info.appendChild(info_text);
  info_text.appendChild(text);

  return element;
}

function nav_component() {}

document.body.appendChild(component());
document.body.appendChild(nav_component());