let URLS = '';
let number = 0;
let data = [];
const button = document.getElementById('button');
const videoArea = document.getElementById("video");

function getData() {
    const request = new XMLHttpRequest(); //-- 1
    
    request.onreadystatechange = function() { //-- 2-1
      if (request.readyState == 4) { //-- 2-2
        if(request.status == 200) { //-- 2-3
          URLS = request.response.split(','); //-- 2-4
          console.log(URLS);
        }
      }
    }
    
    request.open("GET", "data.txt"); //-- 3-1
    request.responseType = "text"; //-- 3-2
    request.send(null); //-- 3-3
}

function changeVideo() {
  if(number > 2){
    number = 0;
    videoArea.setAttribute('src', URLS[number]);
    number++;
  } else {
    videoArea.setAttribute('src', URLS[number]);
    number++;
  }
}

button.addEventListener('click', changeVideo);

window.onload = getData;