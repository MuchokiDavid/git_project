/*
let x= marks

x>= 80=A
x> 70-79 =B
60-69=C
40-59 = D
<40 = E
*/

// If....else example
function grade(x){
    let grades;
    if(x>=80)
    {
    grades= 'A';
}
else if (x>=70 || x<79)
{
    grades= 'B';
}
else if (x>=60 && x<69){
    grades = 'C';
}
else if (x>=40 && x<59){
    grades = 'D';
}
else if (x<39){
    grades = 'F';
}
else{
    console.log("Invalid grade");
}
return grades;
}

let f= grade("Grade");
console.log(f);

//Ternary Condition
//condition ? exprIfTrue : exprIfFalse

function grading(q){
    let grd;
   grd= q>=40 ? "Pass" : "Fail";
   return grd;
}
let p= grading(39);
console.log(p);
/* if (q>=40){
    console.log("Pass");
}
else{
    console.log("Fail");
}*/

//switch--case
const qw="R";

switch (qw) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log ("Fair");
        break;
    case "D":
        console.log("Can do better");
        break;
    case "F":
        console.log("Fail");

    default:
        console.log("Invalid grade");
        break;
}