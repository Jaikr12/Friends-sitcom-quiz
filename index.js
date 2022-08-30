var readlineSync = require('readline-sync');
var score = 0;
var username = readlineSync.question("May i know your name ? ");
console.log();
console.log("Welcome " + username + " to do you know F.R.I.E.N.D.S(American sitcom) quiz? ");
console.log();

function quiz(question,answer){
  var ques = readlineSync.question(question);

  if(ques === answer ){
    console.log("right");
    score+= 1;
    
  }else{
    console.log("wrong");
  }
  console.log("Score : " + score);
  console.log("--------------------------------");

}
  
questionOne = {
  question: "Monica organises her towels into several categories. But how many? ",
  answer:"11",
}

questionTwo = {
  question: "Who was the youngest person in the Friends gang? ",
  answer: "chandler",
}
questionThree ={
  question: "What was the name of Joey's childhood imaginary friend? ",
  answer: "maurice",
}
questionFour ={
  question: "In which city is Friends set? ",
  answer:"new york city",
}
questionFive ={
  question: "What hangs on Monica's purple door? ",
  answer: "yellow picture frame",
}
questionSix ={
  question: "What is Chandler's middle name? ",
  answer: "muriel",
}
questionSeven ={
  question: "What song is Phoebe best known for?",
  answer: "smelly cat",
}
questionEight ={
  question: "What is Rachel scared of?",
  answer: "swings",
}
questionNine ={
  question: "What is Joey’s fake name?",
  answer: "ken adams",
}
questionTen ={
  question: "What’s Monica’s biggest pet peeve?",
  answer: "animals dressed as humans",
}
questionEleven ={
  question: "What word did Ross say he learned in karate?",
  answer: "unagi",
}


var arr = [questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen,questionEleven];

for(var i =0;i < arr.length;i++){
  var result = arr[i];
  quiz(result.question,result.answer); 
}
console.log("Thanks for playing");
console.log("Your final score is : " + score);
  console.log("------------------------------------------------");

console.log("Check out the high score. If your score is higher than the last one.Ping me and I'll update it");
console.log("navneet : 9");
console.log("amneet : 7");
