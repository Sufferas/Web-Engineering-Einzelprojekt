import '../style-folder/animalsapi.css';


function component2() {
  const element = document.createElement('div');
  const container = document.createElement('div');

  element.classList.add('cat-container');
  container.setAttribute("id", 'image')

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


