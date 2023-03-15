const container = document.getElementById('container');
const video = document.querySelector('video');


const node3 = document.createElement('h3');
const nodetxt3 = document.createTextNode('Feel free to feel our music');
node3.appendChild(nodetxt3);
container.appendChild(node3);

const node = document.createElement('p');
const nodetxt = document.createTextNode('If you like music and want to relax,please stay with us.');
node.appendChild(nodetxt);
container.appendChild(node);

const node1 = document.createElement('p');
const nodetxt1 = document.createTextNode("You don't need  to know how to play piano, this web site will help you how to play.");
node1.appendChild(nodetxt1);
container.appendChild(node1);

const node4 = document.createElement('p');
const nodetxt4 = document.createTextNode("We prepare for you, few song who are easy to learn and play, so stay with us.");
node4.appendChild(nodetxt4);
container.appendChild(node4);


const node2 = document.createElement('a');
const nodetxt2 = document.createTextNode('Play the piano');

node2.appendChild(nodetxt2);

node2.title = "Play the piano";
node2.href = " playOnline.html";

container.appendChild(node2);

var keyleft = document.querySelectorAll(".keyleft");
var keyright = document.querySelectorAll(".keyright");
var keytop = document.querySelectorAll(".keytop");
var keybottom = document.querySelectorAll(".keybottom");

let pos = 0;
let posBottom = 0;
//move keys left to right

setInterval(function () {
  pos += 2;
  keyleft.forEach(function (keyleft) {
    keyleft.style.left = pos + 'px';
    if (pos == 500) {
      pos = 0;
    }
  });
}, 50);

//move keys right to  left

setInterval(function () {
  pos += 2;
  keyright.forEach(function (keyright) {
    keyright.style.right = pos + 'px';
    if (pos == 500) {
      pos = 0;
    }
  });
}, 50);

//move keys top to  bottom

setInterval(function () {
  pos += 2;
  keytop.forEach(function (keytop) {
    keytop.style.top = pos + 'px';
    if (pos == 500) {
      pos = 0;
    }
  });
}, 50);


let slideIndex = 0;
showSlides();

function showSlides() {
  let i = 0;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2500); // image will be changes in every 3 seconds
}
