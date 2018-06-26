const car = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
let object= {};
object['make'] = 'ford';
object['model'] = 'mustang';
object['year'] = '1964';
console.log(object);

let arrayToObject = function(array2D){
    let newObject = {};
    for(let i=0; i<array2D.length ;i++){
       // nuevo Objeto va ser newObject[propiedades[i][0]]= valores[i][1]
       newObject[array2D[i][0]]= array2D[[i][1]];
    }
    return newObject;
}
