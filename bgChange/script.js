var hexDatabase=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
var randomGenerator=function(){
   return Math.floor(Math.random()*16);
}
var button=document.getElementById('button');
var hexColor='#';
var bgChange=function(){
    var hexColor='#';
    for(let i=0;i<6;i++){
        hexColor+=hexDatabase[randomGenerator()];
    }
    document.getElementById('colorName').innerText=hexColor;
    document.getElementById('flexMainContainer').style.backgroundColor=hexColor;
}

button.addEventListener("click",bgChange);