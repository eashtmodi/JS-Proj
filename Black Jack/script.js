function ageInDays(){ 
    var birthdays= prompt("Enter your birth year");
    var days=(2022-birthdays)*365;
    let h1=document.createElement('h1');
    var testAnswer=document.createTextNode('You succesfuly wasted '+days+' days');
    h1.setAttribute('id','Year');
    h1.appendChild(testAnswer);
    document.getElementById('Years').appendChild(h1);
};

function reset(){
    document.getElementById('Year').remove();
};

//task 1 ended

var count=0;
function catGenerator(){
    var image=document.createElement('img');
    image.setAttribute('id','catImage');
    image.setAttribute('class',"catImage")
    image.src='http://thecatapi.com/api/images/get?format=src&type=gif&size=small';
    document.getElementById("catImageShower").appendChild(image);
    count++;
};
function reset1(){
    while(count!=0){
        document.getElementById('catImage').remove();
        count--;
    };
    

}
//Challenge 2 ends
var yourScore;
function rpsGame(yourChoice){
    
    var humanChoice=yourChoice.id;
    var botChoice=intToChoice();
    results=decideWinner(humanChoice,botChoice);
    message=finalMessage(yourScore);
    console.log(message['color']);
    rpsFrontEnd(humanChoice,botChoice,message);
};

function randomToRps(){
    return Math.floor(Math.random()*3);

};

function intToChoice(){
    let int=randomToRps();
    let list=['rock','paper','scissor'];
    var choice=list[int];
    console.log(choice);
    return choice;
};

function decideWinner(human,bot){
    var database={
        'rock':{'scissor':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissor':0},//done
        'scissor':{'paper':1,'scissor':0.5,'rock':0}
    }
    yourScore=database[human][bot];
    var botScore=database[bot][human];
    console.log([yourScore,botScore]);

    return[yourScore,botScore];

}
function finalMessage(hScore){
    if(hScore===0){
        return{'message':'you lost','color':'red'};

    }
    if(hScore===0.5){
        return{'message':'tie','color':'yellow'};
        
    }
    if(hScore===1){
        return {'message':'you won','color':'green'};
        
    }

}
function rpsFrontEnd(a,b,c){
    var imagesDatabaseSrc={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src

    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv=document.createElement('div');
    var messageTextDiv=document.createElement('div');
    var botDiv=document.createElement('div');


    humanDiv.innerHTML="<img src='"+imagesDatabaseSrc[a]+"'width=100px height=100px;>";
    document.getElementById('rps').appendChild(humanDiv);

    messageTextDiv.innerHTML="<h1 style=color:"+c['color']+";padding:30px;"+'>'+c['message']+'</h1>';
    document.getElementById('rps').appendChild(messageTextDiv);

   

    botDiv.innerHTML="<img src='"+imagesDatabaseSrc[b]+"'width=100px height=100px >";
    document.getElementById('rps').appendChild(botDiv);

    
}

//Task 3 ends


var allButtons=document.getElementsByTagName('button');
console.log(allButtons);
var copyAllButtons=[];
for(let i=0;i<allButtons.length;i++){
    copyAllButtons.push(allButtons[i].classList[1]);
}
// console.log(copyAllButtons[1]);


// console.log(copyAllButtons[1].classlist())
function buttonColorChange(action){
    action=action.value;
    if(action==='red'){
        console.log('red');
        redButtons();
        
    }
    if(action==='green'){
        console.log('green');
        greenButtons();
    }
    if(action==='yellow'){
        console.log('yellow');
        yellowButtons();
    }
    
    if(action==='random'){
        console.log('random');
        randomButtons();
    }
    if(action==='reset'){
        console.log('reset');
        resetButtons();
    }
}    
function redButtons(){
    for(let i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');

    }
}
function greenButtons(){
    for(let i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');

  
    }
}
function yellowButtons(){
    for(let i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-warning');

    }
}
function resetButtons(){
    for(let i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);

    }
}
function randomButtons(){
    for(let i=0;i<allButtons.length;i++){
        const choices=['btn-danger','btn-warning','btn-primary','btn-success']
        let randomInt= Math.floor(Math.random()*4);
        console.log(randomInt);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(choices[randomInt]);

    }
}
//task 4 end


//black jake
var userScore=0;
var botScore=0;
var resultText=document.getElementById('blackResult');
var userScoreText=document.getElementById('your-score');
var botScoreText=document.getElementById('bot-score');
var winTableText=document.getElementById('blackWins');
var loseTableText=document.getElementById('blackLoses');
var tieTableText=document.getElementById('blackDraws');

var winCount=0;
var loseCount=0;
var drawCount=0;

var scoredDataBase={
    '2':2,
    '3':3,
    '4':4,
    '5':5,
    '6':6,
    '7':7,
    '8':8,
    '9':9,
    '10':10,
    'A':1,
    'J':11,
    'Q':12,
    'K':13

}
function hit(){
    let choices=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    if(userScore<=21){
        var randomCard=Math.floor(Math.random()*13);
        let choice=choices[randomCard];
        let imgCardd=document.createElement('img')
        imgCardd.setAttribute('id','userCardImage');

        imgCardd.src='blackjack_assets/images/'+choice+'.png';
        document.getElementById('yourGameId').appendChild(imgCardd)
        userScore=userScore+scoredDataBase[choice];
        console.log(choice,userScore);
        userScoreText.innerText=userScore;
        if(userScore>21){
            lost();

        }
    }
}


function stand(){
    let choices=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    let count=0;
    while(count<3 && botScore<21){

        var randomCard=Math.floor(Math.random()*13);
        let choice=choices[randomCard];
        botScore=botScore+scoredDataBase[choice];
        console.log(choice,botScore);
        botScoreText.innerText=botScore;
        count++;
        let imgCard=document.createElement('img');
        imgCard.setAttribute('id','botCardImage');
        
        imgCard.src='blackjack_assets/images/'+choice+'.png';
        document.getElementById('botGameId').appendChild(imgCard);
        
        if(botScore>=21){
            
            if(botScore>21){
                won();
            }
            break;
        

        }
        
    }
    if(botScore<=21 && count==3){
        if(botScore>userScore){
            lost();
        }
        if(botScore<userScore){
            won();
        }
        if(botScore==userScore){
            draw();
        }
        
    }
}
function deal(){
    resultText.innerHTML=' '
    userScore=0;
    botScore=0;
    userScoreText.innerText='0';
    botScoreText.innerText='0';
    let div = document.getElementById("yourGameId");           // Get the <div> element with id="myDIV"
    let nodelist = div.getElementsByTagName("img").length;
    
    let div1 = document.getElementById("botGameId");           // Get the <div> element with id="myDIV"
    let nodelist1 = div1.getElementsByTagName("img").length;
    
    // var countUser=document.getElementById('userCardImage').length;
    // var countBot=document.getElementById('botCardImage').length;
    while(nodelist!=0){
        document.getElementById('userCardImage').remove();
        nodelist--;
    }

    while(nodelist1!=0){
        document.getElementById('botCardImage').remove();
        nodelist1--;
    }
    
}
function lost(){
    resultText.innerText='You Lost';
    loseCount++;
    loseTableText.innerText=loseCount;



}
function won(){
    resultText.innerText='You Won';
    winCount++;
    winTableText.innerText=winCount;

}
function draw(){
    resultText.innerText='Draw';
    drawCount++;
    tieTableText.innerText=winCount;
}