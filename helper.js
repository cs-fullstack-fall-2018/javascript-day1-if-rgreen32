var apple = ["HIM"]
var sameApple = ["HIM"]
var answer;
if (apple[0] === sameApple[0]){
    answer = "CORRECT"
}else{
    answer = "NOT CORRECT"
}

console.log("THAT IS..." + answer);


///////////////////////////////////////////////////

var input = prompt("GIMME A NUMBER")

if (input > 0 ) {
    console.log("POSITIVE")
}else if(input == 0){
    console.log("ZERO")

}else{
    console.log("NEGATIVE")
}

////////////////////////////////////////////

var num = prompt("ENTER 1, 2, or 3.");

if (num === 1 || num === 2 || num === 3){
    console.log("Correct")
}else{
    console.log("ERROR")
}