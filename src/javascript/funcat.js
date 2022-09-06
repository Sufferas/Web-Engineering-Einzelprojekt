import '../style-folder/animalsapi.css';
import '../style-folder/buttons.css';



function component2() {
  const element = document.createElement('div');
  const container = document.createElement('div');

  const htmlElementH1 = document.createElement('h1');

  const aElementBotton = document.createElement('a');
  const spanElement1 = document.createElement('span');
  const spanElement2 = document.createElement('span');
  const spanElement3 = document.createElement('span');
  const spanElement4 = document.createElement('span');


  element.classList.add('cat-container');
  container.setAttribute("id", 'image')

  htmlElementH1.innerText = 'Cats'
  aElementBotton.setAttribute("href", 'index.html')
  aElementBotton.setAttribute("class", 'animated-button9')
  aElementBotton.innerText = 'Refresh'

  element.append(htmlElementH1)
  element.appendChild(aElementBotton);
  aElementBotton.appendChild(spanElement1);
  aElementBotton.appendChild(spanElement2);
  aElementBotton.appendChild(spanElement3);
  aElementBotton.appendChild(spanElement4);

  element.appendChild(container);


  return element;
}

document.body.appendChild(component2());



function ajax_get(url, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      console.log('responseText:' + xmlhttp.responseText);
      try {
        var data = JSON.parse(xmlhttp.responseText);
      } catch (err) {
        console.log(err.message + " in " + xmlhttp.responseText);
        return;
      }
      callback(data);
    }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

ajax_get('https://api.thecatapi.com/v1/images/search?size=700px', function(data) {
  var html = '<img src="' + data[0]["url"] + '">';
  document.getElementById("image").innerHTML = html;
});


