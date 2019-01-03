var randomArray = [], imgArray = [];
var check1 = false, check2 = false;
var images = ['html.png','csharp.png','java.jpg','js.png','python.png','ruby.png','sql.jpg','vuejs.png']
var td = document.getElementsByTagName('td');
var mainCounter=0;
var temp;
var tempThis;
var checkFinish=0;
var showCounter = 0;
window.onload= function(){
    if(!check2){
        document.getElementById("startGameButton").style = "display: none;"
    }
    for(var i=0;i<16;i++){
        document.getElementsByTagName("img")[i].src = "img/black.jpg";
        document.getElementsByTagName("img")[i].alt = "img/black.jpg";
    }
}
function checkRandom(random){
    var counter = 0;
    for(var i=0;i<imgArray.length;i++){
        if(random == imgArray[i]){
            counter++;
        }
    }
    if(counter <= 1){
        imgArray.push(random);
        console.log(imgArray[i]);
    }
    else{
        checkRandom(createRandomNumber());
        counter = 0;
    }
}
function createRandomNumber(){
    return Math.floor(Math.random()*8);
}
function startGame(){
    if(!check2){
        document.getElementById("startGameButton").style = "display: none;"
    }
    
    for(var i=0;i<16;i++){
        document.getElementsByTagName("img")[i].src = "img/black.jpg";
        document.getElementsByTagName("img")[i].alt = "img/black.jpg";
    }
    check2 = true;
    if(check2){
        document.getElementById("startGameButton").style = "display:none;";
        document.getElementById("showAgain").style = "display:!none;"
    }
    for(var i=0;i<td.length;i++){
        td[i].addEventListener('click',listenerFunction);
    }
}
function showAgain(){
    if(showCounter===0){
        for(var i=0;i<16;i++){
        document.getElementsByTagName("img")[i].src = "img/"+images[imgArray[i]];
        document.getElementsByTagName("img")[i].alt = "img/"+images[imgArray[i]];
        }
        setTimeout(function () {
        for(var i=0;i<16;i++){
        document.getElementsByTagName("img")[i].src = "img/"+"black.jpg";
        document.getElementsByTagName("img")[i].alt = "img/"+"black.jpg";
        }
        }, 5000);
    }
    showCounter++;
    if(showCounter===1){
        document.getElementById('showAgain').style.display = 'none';

    }
    //document.getElementById("showAgain").style = "display:none;"
    console.log(showCounter);
}
function showImages(){
    var random;
    for(var i=0;i<16;i++){
        document.getElementsByTagName("td")[i].style.border = "1px solid black";
        random = createRandomNumber();
        checkRandom(random);
        document.getElementsByTagName("img")[i].src = "img/"+images[imgArray[i]];
        document.getElementsByTagName("img")[i].alt = "img/"+images[imgArray[i]];
    }
    check1 = true;
    if(check1){
        document.getElementById("showImagesButton").style = "display:none;";
    }
    check2 = true;
    document.getElementById("startGameButton").style = "display: !none;"; 
    
}
function listenerFunction(){
    this.childNodes[0].src = 'img/' + images[imgArray[this.childNodes[0].id]];
    mainCounter++;
    var tempThis1 = this.childNodes[0];
    if(mainCounter===2){
        if(temp != images[imgArray[this.childNodes[0].id]]){
            setTimeout(function(){
                tempThis.src = 'img/black.jpg';
                tempThis1.src = 'img/black.jpg';
            },500)
        }
        else{
            tempThis.parentNode.removeEventListener('click',listenerFunction,false);
            tempThis1.parentNode.removeEventListener('click',listenerFunction,false);
            checkFinish++;
            console.log(checkFinish);
            if(checkFinish===8){
                alert('game is finish, well done!');
                document.getElementById('myTable').style.display ='none';
                document.getElementById('showAgain').style.display ='none';
            }
        }
        mainCounter = 0;
        
    }
    else{
        temp = images[imgArray[this.childNodes[0].id]];
        tempThis = this.childNodes[0];
    }
}