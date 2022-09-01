import _ from 'lodash';
import './style-folder/style.css';
import './style-folder/nav.css';
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

function nav_component() {
  const nav = document.createElement('nav');
  const logo = document.createElement('logo');
  const h4 = document.createElement('h4');
  logo.classList.add('logo');
  nav.appendChild(logo);
  h4.innerText = 'Navbar'
  logo.appendChild(h4);

  const ul = document.createElement('ul');
  ul.classList.add('nav-links');
  // Home, About, Contents
  const Home = document.createElement('a');
  const About = document.createElement('a');
  const Contents = document.createElement('a');

  Home.href = 'index.html';
  Home.innerText = 'Home';

  About.href = 'about.html';
  About.innerText = 'About';

  Contents.href = 'contents.html';
  Contents.innerText = 'Contents';

  nav.appendChild(ul);
  ul.appendChild(Home);
  ul.appendChild(About);
  ul.appendChild(Contents);

  const burger = document.createElement('div');
  burger.classList.add('burger');
  const line1 = document.createElement('div');
  line1.classList.add('line1');
  const line2 = document.createElement('div');
  line2.classList.add('line2');
  const line3 = document.createElement('div');
  line3.classList.add('line3');

  nav.appendChild(burger);
  burger.appendChild(line1);
  burger.appendChild(line2);
  burger.appendChild(line3);


  return nav;
}

document.body.appendChild(component());
document.body.appendChild(nav_component());

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s `;
      }
    });
    burger.classList.toggle("toggle");
  });
  //
};

navSlide();