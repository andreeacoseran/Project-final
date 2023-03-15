
const article = document.getElementById('article');

const p = document.createElement('p');
const ptxt = document.createTextNode('If you are sad ,what is the best way to feel better?...Yes , you guess...the music.');
p.appendChild(ptxt);
article.append(p);

const p1 = document.createElement('p');
const ptxt1 = document.createTextNode('For you  I try to bring a little bit of music.');
p1.appendChild(ptxt1);
article.append(p1);

const p2 = document.createElement('p');
const ptxt2 = document.createTextNode('In this site I use tehnology like:');
p2.appendChild(ptxt2);
article.append(p2);

const ul = document.createElement('li');
li= document.createTextNode(' HTML ');
ul.appendChild(li);
article.append(ul);

const div= document.createElement('div');
const divtxt = document.createTextNode('Hyper Text Markup Language');
div.appendChild(divtxt);
ul.appendChild(div);

const div11= document.createElement('div');
const divtxt11 = document.createTextNode(' Is the standard markup language for creating Web pages');
div11.appendChild(divtxt11);
ul.appendChild(div11);

const div111= document.createElement('div');
const divtxt111 = document.createTextNode('  Tell the browser how to display the content ');
div111.appendChild(divtxt111);
ul.appendChild(div111);


const ul1 = document.createElement('li');
li1= document.createTextNode('CSS ');
ul1.appendChild(li1);
article.append(ul1);

const div1= document.createElement('div');
const divtxt1 = document.createTextNode('Cascading Style Sheets');
div1.appendChild(divtxt1);
ul1.appendChild(div1);

const div12= document.createElement('div');
const divtxt12 = document.createTextNode('CSS describes how HTML elements are to be displayed on screen, paper, or in other media');
div12.appendChild(divtxt12);
ul1.appendChild(div12);



const div122= document.createElement('div');
const divtxt122 = document.createTextNode('CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.');
div122.appendChild(divtxt122);
ul1.appendChild(div122);

const ul2 = document.createElement('li');
li2 = document.createTextNode('JavaScript');
ul2.appendChild(li2);
article.append(ul2);

const div13= document.createElement('div');
const divtxt13 = document.createTextNode("JavaScript is the world's most popular programming language." );
div13.appendChild(divtxt13);
ul2.appendChild(div13);

const div133= document.createElement('div');
const divtxt133 = document.createTextNode("JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else." );
div133.appendChild(divtxt133);
ul2.appendChild(div133);

const ul3 = document.createElement('li');
li3 = document.createTextNode('JQuerry ');
ul3.appendChild(li3);
article.append(ul3);

const div2= document.createElement('div');
const divtxt2 = document.createTextNode('jQuery has been the most popular JavaScript library in the world');
div2.appendChild(divtxt2);
ul3.appendChild(div2);

const div23= document.createElement('div');
const divtxt23 = document.createTextNode('The purpose of jQuery is to make it much easier to use JavaScript on your website. jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.');
div23.appendChild(divtxt23);
ul3.appendChild(div23);

const ul4 = document.createElement('li');
li4 = document.createTextNode('Animation');
ul4.appendChild(li4);
article.append(ul4);

const div4= document.createElement('div');
const divtxt4 = document.createTextNode("JavaScript animations are done by programming gradual changes in an element's style." );
div4.appendChild(divtxt4);
ul4.appendChild(div4);

const ul5 = document.createElement('li');
li5 = document.createTextNode('JSON');
ul5.appendChild(li5);
article.append(ul5);

const div3= document.createElement('div');
const divtxt3 = document.createTextNode('JavaScript Object Notation');
div3.appendChild(divtxt3);
ul5.appendChild(div3);

const div33= document.createElement('div');
const divtxt33 = document.createTextNode(' JSON is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).');
div33.appendChild(divtxt33);
ul5.appendChild(div33);

const ul6 = document.createElement('li');
li6 = document.createTextNode('DOM ');
ul6.appendChild(li6);
article.append(ul6);

const div66= document.createElement('div');
const divtxt66 = document.createTextNode('Document Object Model');
div66.appendChild(divtxt66);
ul6.appendChild(div66);

const div666= document.createElement('div');
const divtxt666 = document.createTextNode('With the HTML DOM, JavaScript can access and change all the elements of an HTML document.');
div666.appendChild(divtxt666);
ul6.appendChild(div666);



  // Wrap every letter in a span
  var textWrapper = document.querySelector('.citat .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.citat .letter',
      translateY: ["1em", 0],
      translateZ: 0,
      duration: 750,
      opacity: 1,
      
      delay: (el, i) => 150 * i
    }).add({
      targets: '.citat',
      opacity: 1,
      duration: 100,
      easing: "easeOutExpo",
      delay: 1000,
     
    });

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    tag.controls= false;
    tag.muted= false;
    tag.autoplay= true;

    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '400',
        width: '700',
        videoId: 'HCDygl0pttM',
        loop:true,
        autoplay: true,
        controls:true,
        playerVars: {
          'playsinline': 1 //allow the video to play inline on mobile devices.
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }

    function onPlayerReady(event) {
      event.target.playVideo();
    }

    var done = false;
    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
        // setTimeout(stopVideo, 6000);
        done = true;
      }
    }
    function stopVideo() {
      player.stopVideo();
    }

  
    anime.timeline({loop: true})
    .add({
      targets: 'li',
      translateY: ["2em", 5],
      // translateZ: ["3em", 8],
      //translateX: ["3em", 8],
      duration: 750,
      opacity: 1,
      
      delay: (el, i) => 700 * i // i= index in the list of target
            // The delay function will delay the start time of each animation by 700ms,
            // multiplied by its index in the list of targets.
    }).add({
      targets: 'li',
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,  
     
    });