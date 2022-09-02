import '../style-folder/nav.css';


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