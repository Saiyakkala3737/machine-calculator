 var inputString=document.querySelector('#input');
var resultString=document.querySelector('#result');
var finalNumber;
function numberClick(number){
    inputString.value += number;
    
}
function backSpace(){
    inputString.value=inputString.value.substring(0,inputString.value.length-1);
}
function allClear(){
    inputString.value=" ";
    resultString.value="0";
}
function answer(){
    resultString.value = eval(inputString.value);
} 

