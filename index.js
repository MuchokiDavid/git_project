//grading: >70 -> A, 60-69 ->B, 50-59-> C 40-49 -> D  below 39 -> Fail

let grad=10;
 function grds(grad){
    if (grad>70){
        console.log("A");
    }
    else if(grad>=60 && grad <=69){
        console.log("B");
    }
    else if(grad>=50 && grad <=59){
        console.log("C");
    }
    else if(grad>=40 && grad<=49){
        console.log("D");
    }
    else{
        console.log("F");
    }
}
    grds(39);

    grds(50);

    //switch case
    //functio39rdf(){
        switch (grad) {
            case 70:
                console.log("A");
                break;
            case 60:
                console.log("B");
                break;
            case 50:
                console.log("C");
                break;
            case 40:
                console.log("C");
                break;
            case 30:
                console.log("D");
                break;
            case 20:
                console.log("F");
                break;
            default:
                console.log("Enter a valid grade");
                break;
        }
    //}
    //grdf();
