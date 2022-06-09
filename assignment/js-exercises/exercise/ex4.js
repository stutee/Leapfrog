var numbers = [1, 2, 3, 4];

function transform(collection, tranFunc) { 
    let arr=[];
    for (i=0; i<collection.length; i++){
        arr.push(tranFunc(collection[i]));
    }
    return arr;
 }

var output = transform(numbers, function(num) {
    return num * 2;
});

console.log(output);
