

function component() {
  const h2 = document.createElement('h2');
  const element = document.createElement('div');
  const labelElement = document.createElement('label');
  const inputElement = document.createElement('input');
  const buttonElement = document.createElement('button');
  const htmluListElement = document.createElement('ul');




  h2.innerText = 'Shopping list';
  element.append(h2)

  labelElement.innerText = "Enter a new item"
  labelElement.setAttribute("for", 'item')
  element.appendChild(labelElement)

  inputElement.setAttribute("type", 'text')
  inputElement.setAttribute("name", 'item')
  inputElement.setAttribute("id", 'item')
  element.appendChild(inputElement)

  buttonElement.innerText = "Add item"
  element.appendChild(buttonElement)

  htmluListElement.setAttribute("id", 'shop-list')
  element.appendChild(htmluListElement)

  // element.classList.add('top-bar');

  return element;
}

document.body.appendChild(component());


const list = document.getElementById('shop-list')
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = 'Delete';
  list.appendChild(listItem);

  listBtn.addEventListener('click', () => {
    list.removeChild(listItem);
  });

  input.focus();
});
