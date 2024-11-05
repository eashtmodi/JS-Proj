const quizData = [ 
    {
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c',
   }, {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'a',
    }, {
        question: 'Who is the President of US?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b',
      },{
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct:'a',
      }
   ]
var currentQuiz=0;
const questionEl=document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const sumbitBtn=document.getElementById('sumbit');
var correctAnswers=0;
loadQuiz();
function loadQuiz(){
    const currentQuizData=quizData[currentQuiz];
    console.log(currentQuiz);
    questionEl.innerText= currentQuizData.question;
    a_text.innerHTML=currentQuizData.a;
    b_text.innerHTML=currentQuizData.b;
    c_text.innerHTML=currentQuizData.c;
    d_text.innerHTML=currentQuizData.d;
    
}
sumbitBtn.addEventListener('click',()=>{
    if(currentQuiz<quizData.length-1){
        getSelected();
        loadQuiz();
        


    }
    else{
        displayScore();
    }
})
function getSelected(){
    const answers=document.getElementsByName('answer');
    for(i=0;i<4;i++){
        if(answers[i].checked){
            console.log(answers[i].value);
            answers[i].checked=false;
            if(answers[i].value===quizData[currentQuiz].correct){
                correctAnswers++;
            }
            currentQuiz++;           

            return answers[i].value;
            

        }


    }
     
}
function displayScore(){
    document.getElementById("quiz-header").remove();
    document.getElementById("sumbit").remove();
    h1=document.createElement('h1');
    text=document.createTextNode('You Scored '+ correctAnswers+'/'+quizData.length);
    h1.appendChild(text);
    document.getElementById('quiz-container').appendChild(h1);
}