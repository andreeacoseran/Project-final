const hello = document.getElementById('hello');
// hello.innerHTML = "Don't be shy and say hy ";

function initMap() {
    var dumbo = {lat: 44.319305, lng:23.800678 };
    var mapOptions = {
        center: dumbo,
        zoom: 15,
    };
    var googlemap = new google.maps.Map(document.getElementById("map"), mapOptions);
}


window.initMap = initMap;

const nameUser = document.getElementById('name');
const email = document.getElementById('email');
const subjectUser = document.getElementById('subject');
const textUser = document.getElementById('text');
const submit = document.getElementById('submit');

const container = document.getElementsByClassName('container');
const form = document.querySelector('form');

var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0,1],
    opacity: [0,1],
    translateZ: 0.2,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.3,1],
    easing: "easeOutExpo",
    duration: 1000,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 1000
  });

function createField() {
  // e.preventDefault();
     let listOfMessages = [];

    let valoare = {
        Email: email.value,
        Name: nameUser.value,
        Subiect: subject.value,
        Message: textUser.value,
    }
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


    if (email.value == "" || nameUser.value == "" || subject.value == "" || textUser.value == "") {
        alert(`Please complete all field `);
        return;
    } if (!filter.test(email.value)) {
            alert("Please enter a corect e-mail...");
            email.focus;
            return false;
        } else {
            alert(`${nameUser.value}\n Your message was send!!\n  We contact you soon.`);
        }
    
     listOfMessages.push(`${email.value}, ${nameUser.value}, ${subject.value}, ${textUser.value}`);

    
 console.log(listOfMessages);
   
}

submit.addEventListener('click', createField);
