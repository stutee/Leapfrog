let final="";

function myStar(num){
    for(let i=0;i< num;i++){        //row
        for(let j=0;j<num-i;j++){   //column 
            final += "*";
    }
        final += "\n";
}
    return final;
}

let result= myStar(5);
console.log(result);