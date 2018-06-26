const car = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
const student = [['name','nicole'],['age','36'],['city','villa alemana']];
const fruits =[['apple','red'],['watermellon','green n pink'], ['limon', 'yellow']];

/*let object = {};
object['make'] = 'ford';
object['model'] = 'mustang';
object['year'] = '1964';**/
//console.log(object);

let arrayToObject = function (array2D) {
    let newObject = {};
    for(let i=0; i < array2D.length ;i++){
       // nuevo Objeto va ser newObject[propiedades[i][0]]= valores[i][1]
       newObject [array2D[i][0]] = array2D[i][1];
    }
   return newObject;
} 
console.log(arrayToObject(car));
console.log(arrayToObject(student));
console.log(arrayToObject(fruits));