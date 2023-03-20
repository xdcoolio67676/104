// random value generated
  var y=Math.floor(Math.random()*10+1);
// counting the number of guesses
var x=document.getElementById("guessField").value;
// made for correct Guess
if(x==y){
    alert("CONGRATULATIONS!!"+playername+"YOU GUESSED IT IN"+guess+"GUESS");
    guess=1;
}
  
// function for number guessed by user     
else if(x>y)
{
    guess++;
    alert("opps sorry try a smaller number");
}
else
{
    guess++;
    alert("guess a smaller number")
}
