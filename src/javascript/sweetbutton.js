import '../style-folder/sweetbutton.scss';

var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}

function component() {
  const element = document.createElement('button');
  element.classList.add('bubbly-button');
  element.setAttribute("value", 'Click me!')

  return element;
}

document.body.appendChild(component());