let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
 document.querySelector('#btnGiveCommand').addEventListener(touchEvent, function () {
     recognition.start();
 });

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

var grammer = '#JSGF V1.0';

var recognition = new SpeechRecognition();
var speechRecognitionGrammerList = new SpeechGrammarList();
speechRecognitionGrammerList.addFromString(grammer, 1);


recognition.grammers = speechRecognitionGrammerList;
recognition.lang = 'sr-SP';
recognition.interimResult = false;
document.body.style.backgroundColor = "blue";

recognition.onresult = function (event) {
    var last = event.results.length - 1;
    var command = event.results[last][0].transcript;
    message.textContent = 'Речено је: ' + command + '.';
    window.open(`https://delfi.rs/pretraga?c=0&q=${command}`);
}
//recognition.onspeechend = function () {
    //document.body.style.backgroundColor = "white";
    //message.textContent = 'Чича мича, мора да се прича!';
//};
recognition.onerror = function (event) {
    console.log(event.error);
    message.textContent = 'Чича мича, мора да се прича!';
}
