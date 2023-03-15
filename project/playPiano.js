let sheet = document.getElementById('sheet');
const blackKey= document.querySelectorAll('.black-key');
const whiteKey = document.querySelectorAll('.white-keys');
const allKeyS = document.querySelectorAll('.keys');
const sheetExemple = document.getElementById('sheet-exemple');
const createExemple = document.getElementById('create-exemple');
const btn= document.getElementById('btn');
const btn1= document.getElementById('btn1');
const songs = document.querySelector('#songs');

var songKeysTime = [];
function addKeyTime()
{
	var date = new Date();
	console.log("Following line will return the number of milliseconds");
	var ms = date.getTime();
	console.log(ms);
	songKeysTime.push(ms);
}

/////action from click mouse........
setActionForBlackKey();
function setActionForBlackKey(){
    var buttons = document.querySelectorAll('.black-key');
    for (var i = 0, len = buttons.length; i < len; i++) {
        buttons[i].onclick = function (){
			addKeyTime();
            playSound (this.id);
            sheet.textContent += `${this.textContent}`;
        }
    }
}

setActionForWhiteKey();

function setActionForWhiteKey(){
    var buttons = document.querySelectorAll('.white-key');
    for (var i = 0, len = buttons.length; i < len; i++) {
        buttons[i].onclick = function (){ 
			addKeyTime();
            playSound (this.id);
            sheet.textContent += `${this.textContent}`;
        }
    }
}

function playSound(soundFileName){  
    ///console.log(" playSound:>> " + soundFileName);
    var fileFullPath=`./audio/${soundFileName}.mp3`;
    ///console.log(" fullFilePath="+fileFullPath);
    let sound = new Audio(`${fileFullPath}`);
    sound.play();
}

function checkKeys(charCode, buttonState, skipAdd) {
    ///console.log("checkKeys >>>>>>");
    var color = '';
    var key = ""
    /// SWITH TO UPPERCASE CHARS----------------------
    if(charCode>= 97 && charCode<=122){
        charCode = charCode-32;
    }
    ///-----------------------------------------------
    let x = String.fromCharCode(charCode);
    let keyIsValid = 1;
    ///console.log(" Key:>> " + charCode + "  int value: >>" + x + "  key state: [0-down] | [ 1-up ] " + buttonState);
    switch (charCode) {
        case 80:  // P big
            key = `key10`;
            if (buttonState == 0) { /// key down
                color = 'lightgray';
            } else {
                color = 'black';
            }
            break;
        case 79:	 // O big
            key = `key9`;
            if (buttonState == 0) { /// key down
                color = 'lightgray';
            } else {
                color = 'black';
            }
            break;
        ////////////////////////////
        case 81:  //  q MARE
            key = `key1`;
            if (buttonState == 0) { /// key down
                color = 'lightgray';
            } else {
                color = 'black';
            }
            break;

        case 87:  // w MARE
            key = `key2`;
            if (buttonState == 0) { /// key down
                color = 'lightgray';
            } else {
                color = 'black';
            }
            break;

        case 69:  // e MARE
            key = `key3`;
            if (buttonState == 0) { /// key down
                color = 'lightgray';
            } else {
                color = 'black';
            }
            break;
        case 82:  // r MARE
            key = `key4`;
            if (buttonState == 0) { /// key down
                color = 'lightgray';
            } else {
                color = 'black';
            }
            break;
        case 84:  // t MARE
            key = `key5`;
            if (buttonState == 0) { /// key down
                color = 'lightgray';
            } else {
                color = 'black';
            }
            break;
        case 89:  // y MARE
            key = `key6`;
            if (buttonState == 0) { /// key down
                color = 'lightgray';
            } else {
                color = 'black';
            }
            break;
        case 85:  // u MARE
            key = `key7`;
            if (buttonState == 0) { /// key down
                color = 'lightgray';
            } else {
                color = 'black';
            }
            break;
        case 73:  // i MARE
            key = `key8`;
            if (buttonState == 0) { /// key down
                color = 'lightgray';
            } else {
                color = 'black';
            }
            break;
        ////////////////////////////////////
        case 65:  // a MARE
            key = `key11`;
            if (buttonState == 0) { /// key down
                color = 'lightgray';
            } else {
                color = 'white';
            }
            break;
        case 90:  // z MARE
            key = `key12`;
            if (buttonState == 0) { /// key down
                color = 'lightgray';
            } else {
                color = 'white';
            }
            break;
        case 83:  // s MARE
            key = `key13`;
            if (buttonState == 0) { /// key down
                color = 'lightgray';
            } else {
                color = 'white';
            }
            break;
        case 68:  // d MARE
            key = `key14`;
            if (buttonState == 0) { /// key down
                color = 'lightgray';
            } else {
                color = 'white';
            }
            break;
        case 67:  // c MARE
            key = `key15`;
            if (buttonState == 0) { /// key down
                color = 'lightgray';
            } else {
                color = 'white';
            }
            break;
        case 70:  // f MARE
            key = `key16`;
            if (buttonState == 0) { /// key down
                color = 'lightgray';
            } else {
                color = 'white';
            }
            break;
        case 86:  // v MARE
            key = `key17`;
            if (buttonState == 0) { /// key down
                color = 'lightgray';
            } else {
                color = 'white';
            }
            break;
        case 71:  // g MARE
            key = `key18`;
            if (buttonState == 0) { /// key down
                color = 'lightgray';
            } else {
                color = 'white';
            }
            break;
        case 66:  // b MARE
            key = `key19`;
            if (buttonState == 0) { /// key down
                color = 'lightgray';
            } else {
                color = 'white';
            }
            break;
        case 72:  // h MARE
            key = `key20`;
            if (buttonState == 0) { /// key down
                color = 'lightgray';
            } else {
                color = 'white';
            }
            break;
        case 78:  // n MARE
            key = `key21`;
            if (buttonState == 0) { /// key down
                color = 'lightgray';
            } else {
                color = 'white';
            }
            break;
        case 74:  // j MARE
            key = `key22`;
            if (buttonState == 0) { /// key down
                color = 'lightgray';
            } else {
                color = 'white';
            }
            break;
        case 77:  // m MARE
            key = `key23`;
            if (buttonState == 0) { /// key down
                color = 'lightgray';
            } else {
                color = 'white';
            }
            break;
        case 75:  // k MARE
            key = `key24`;
            if (buttonState == 0) { /// key down
                color = 'lightgray';
            } else {
                color = 'white';
            }
            break;
        default:
            ///here is the key  who don t use
            ///console.log("We don't use this key Key:>> " + charCode + "  int value: >>" + x );
            keyIsValid = 0;
            break;
    } // end swicth
    if (keyIsValid) {
        if (buttonState == 0) {
            ///keyDown or keyPressed - the button is press
            ///playSound									
            playSound(`${key}`);    
            ///add keyCode to display area
			if(skipAdd == 0)
			{
				sheet.textContent += `${x}`;
			}
        } else {
            //here is keyup or keyReleassed - the button in release
        }
        let keyActive = document.getElementById(`${key}`);
        keyActive.style.backgroundColor = `${color}`;
		return true;
    }
	return false;
}///end function 	

var charsTyped = [];

document.onkeypress = function (evt) {
    ///console.log("record keyPressed");
    evt = evt || window.event;
    // Ensure we only handle printable keys
    var charCode = typeof evt.which == "number" ? evt.which : evt.keyCode;
    ///console.log(charCode);
    if (charCode) {
      ///console.log(" onkeypress " + charCode );
      if(checkKeys(charCode, 0, 0)) {
		addKeyTime();  
	  }
    }
};

document.onkeyup = function (evt) {
  //console.log("onkeyup");
  evt = evt || window.event;
  // Ensure we only handle printable keys
  var charCode = typeof evt.which == "number" ? evt.which : evt.keyCode;
  //console.log(charCode);
  if (charCode) {
    ///console.log(" onkeyup" + charCode);
    checkKeys(charCode, 1, 0);
  }
};  

resetSheet();

function resetSheet(){
     sheet.innerText='Your sheet:';
	 songKeysTime.length = 0;
}

const node = document.createElement('h4');
const nodetxt = document.createTextNode('Try out this song');

node.setAttribute('class', 'nodeh4');

node.appendChild(nodetxt);
sheetExemple.append(node);

const node1= document.createElement('p');
const nodetxt1 = document.createTextNode('MA-RY HAD A LIT-TLE LAMB:');
node1.appendChild(nodetxt1);
sheetExemple.appendChild(node1);
node1.setAttribute('class', 'pnode');

const node2 = document.createElement ('p');
const nodetxt2 = document.createTextNode('E  D  C  D  E  E  E');
node2.appendChild(nodetxt2);
sheetExemple.appendChild(node2);
node2.setAttribute('class', 'txtnode');

const node3 = document.createElement ('p');
const nodetxt3 = document.createTextNode('LIT-TLE LAMB, LIT-TLE LAMB:');
node3.appendChild(nodetxt3);
sheetExemple.appendChild(node3);
node3.setAttribute('class', 'pnode');

const node4 = document.createElement ('p');
const nodetxt4 = document.createTextNode('D  D  D  E  E  E');
node4.appendChild(nodetxt4);
sheetExemple.appendChild(node4);
node4.setAttribute('class', 'txtnode');

const node5 = document.createElement ('p');
const nodetxt5 = document.createTextNode('MA-RY HAD A LIT-TLE LAMB');
node5.appendChild(nodetxt5);
sheetExemple.appendChild(node5);
node5.setAttribute('class', 'pnode');

const node6 = document.createElement ('p');
const nodetxt6 = document.createTextNode('E  D  C  D  E  E  E ');
node6.appendChild(nodetxt6);
sheetExemple.appendChild(node6);
node6.setAttribute('class', 'txtnode');

const node50 = document.createElement ('p');
const nodetxt50 = document.createTextNode("IT'S FLEECE WAS WHITE AS SNOW ");
node50.appendChild(nodetxt50);
sheetExemple.appendChild(node50);
node50.setAttribute('class', 'pnode');

const node66 = document.createElement ('p');
const nodetxt66 = document.createTextNode('E  D  C  D  E  E  E ');
node66.appendChild(nodetxt66);
sheetExemple.appendChild(node66);
node66.setAttribute('class', 'txtnode');


const node7 = document.createElement('h4');
const nodetxt7 = document.createTextNode('Your songs');
node7.appendChild(nodetxt7);
createExemple.append(node7);
node7.setAttribute('class', 'nodeh4');

const node8 = document.createElement('p');
const nodetxt8 = document.createTextNode('Your melody:');
node8.appendChild(nodetxt8);
createExemple.append(node8);
node8.setAttribute('class', 'pnode');

function getFullDateAndTime() {
    var today = new Date();
	today
    var date = today.getFullYear() + '_' + (today.getMonth() + 1) + '_' + today.getDate();
    var time = today.getHours() + "_" + today.getMinutes() + "_" + today.getSeconds();
    var dateTime = date + '_' + time;
    ///console.log(dateTime);
    ///dateTime = today.toLocaleString();
    return dateTime;
}

let list = document.getElementById('songs');

btn.addEventListener('click', function(){
  var allContent = sheet.textContent;
  let index     = allContent.indexOf(":");
  var textSong  = allContent.slice(index+1, allContent.length);
  var times     = songKeysTime.join("-");
  console.log(textSong.length);
  console.log(times.length);
  ///songs.innerHTML = textSong;
  var mySongName = prompt("Enter Song Name");
  let cheie = getFullDateAndTime();
  let songKyes = {
          songName:   mySongName,
          songKeys:   textSong,
		  songTime:   times,
        }   
  window.localStorage.setItem(cheie,JSON.stringify(songKyes));  
  resetSheet();
  displayComments();
})

displayComments();


function displayComments(){
    let cnt = localStorage.length;
    let c;
    list.innerHTML = ``;
    if(cnt == 0){
        const p = document.createElement('p');
        p.textContent = 'No sounds recorded' ;
        list.appendChild(p); 
        return;
    }

    let html = ``;
    for(let i=0; i<cnt; i++){
        c = localStorage.key(i);
		var records = localStorage.getItem(c);
		let rawElements = records.split(new RegExp('[{,\n}]', 'g'));
		///console.log("After Split");
		console.log(rawElements);
		var commentName = getData(rawElements[1]);
		var commnetVal  = getData(rawElements[2]);
		var commentTImes  = getData(rawElements[3]);
		console.log("songName  : " +commentName);
		console.log("songKeys : " +commnetVal);
		console.log("songKeysTime : " +commentTImes);
		if( i% 2 == 0){
			html += `<p k ="${c}" style="background-color:white;" > <b>SongName:</b> ${commentName}<br><b>SongKyes: </b>${commnetVal} <br> <button style="float: right;" name="x">X</button> <button name="p">Play</button> </p>`;  
		}else{
			html += `<p k ="${c}" style="background-color:silver";> <b>SongName:</b> ${commentName}<br><b>SongKyes:</b> ${commnetVal} <br> <button style="float: right;" name="x">X</button> <button name="p">Play</button> </p>`;  
		}
    }
    list.innerHTML = html; //silver
}

function getData(itemValue){
	let rawElements1 = itemValue.split(new RegExp('[:]', 'g'));
	console.log(rawElements1);
	rawElements1[0] = rawElements1[0].replace(/^"(.*)"$/, '$1');
	rawElements1[1] = rawElements1[1].replace(/^"(.*)"$/, '$1');
	if(rawElements1[0] == "songName"){
		///console.log("Unpack Song Name : "+ rawElements1[1]);
	}else{
		if(rawElements1[0] == "songKeys"){	
			///console.log("Unpack Comment Keys : "+ rawElements1[1]);
		}
	}
	return rawElements1[1];
}
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function playSoudSecvence(soundSecvecnce, songTimes)
{	
	console.log("playSoudSecvence");
	console.log(songTimes);
	var tm = 250;
	var ss = 0;
	for(var i = 0 ; i < soundSecvecnce.length; i++)
	{	
		var s = soundSecvecnce.charAt(i);
		let xx = s.charCodeAt(0);
		var j = i+1;
		if(j < songTimes.length){
			console.log(songTimes[i] +" - "+ songTimes[j]);
			var s1 = parseInt(songTimes[i]);
			var s2 = parseInt(songTimes[j]);
			var s3 = s2 - s1;
			console.log(s1 +" - "+ s2 +" - "+ s3);
			ss = Math.abs(s3);
		}
		///console.log("Char Val: "+s + "  >> ascii code:" +xx);
		checkKeys(xx, 0, 1);
		if(ss>0){
			await delay(ss);	
		}else{
			/// wait default time value
			await delay(tm);	
		}
		checkKeys(xx, 1, 1);
	}
}

function playSong(key){
	///console.log("Retrive record by key");
	var records = window.localStorage.getItem(key); //searches for the key in localStorage
	///console.log("For key:"+key +"  we have this record stored "+records);
	let rawElements = records.split(new RegExp('[{,\n}]', 'g'));
	console.log("After Split");
	console.log(rawElements);
	var commentName = getData(rawElements[1]);
	var commnetVal  = getData(rawElements[2]);
	var commnetTimes  = getData(rawElements[3]);
	///let index     = commnetTimes.indexOf(":");
	///var songTime  = commnetTimes.slice(index+1, commnetTimes.length);
	console.log("After Split");
	console.log("tm: "+ commnetTimes);
	var times = commnetTimes.split('-');
	console.log(times);
	//console.log(songTime);
	///split secvence
	playSoudSecvence(commnetVal, times);
}

list.addEventListener('click', (e)=> {
	console.log(e.target.name);
    if(e.target.name == "x"){
		///console.log("Delete Song");
		let parinte = e.target.closest('p');
		let k = parinte.getAttribute('k');
		localStorage.removeItem(k);
		parinte.remove();
        if(localStorage.length == 0){
            displayComments();
        }
    }else 
		if(e.target.name == "p"){
		///console.log("Play kyes");
		let parinte = e.target.closest('p');
		let k = parinte.getAttribute('k');
		playSong(k);
    }
})


function clearAllSongs(){
	localStorage.clear();
    displayComments();
    resetSheet();
}

btn1.addEventListener('click', clearAllSongs);
   

const btnup = document.getElementById('arrow');

btnup.addEventListener('click', function(){

  $("html, body").animate({scrollTop: 0}, "slow");

})
