var fruits = [
    {id: 1, name: 'Banana', color: 'Yellow'},
    {id: 2, name: 'Apple', color: 'Red'}
]

function searchByName(fr,name){
    for (i=0; i<fr.length; i++){
        if(fr[i].name.toLowerCase() === name.toLowerCase()){
            return fr[i];
        }
    }
    return "not found";    
};

console.log(searchByName(fruits, 'apple'));


function searchByKey(fr, key, name){
    let matchName= name;
    for (i=0; i<fr.length; i++){
        let matchKey= fr[i][key];
        if(matchKey.toLowerCase() === matchName.toLowerCase()){
            return fr[i];
        }
    }
    return "not found";
};

console.log(searchByKey(fruits,'name', 'apple'));