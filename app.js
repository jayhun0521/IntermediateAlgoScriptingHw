
// Sum all numbers in a range
// let arr = [5, 8];
// let myArr = [];
// let sum = 0;

// function sumAll(arr){

// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// arr.sort(function(a,b){
//     return a-b
// });
// for(let i = arr[0]; i <= arr[1]; i++){
//   myArr.push(i);
// }

// sum = fullArr.reduce(reducer);

// return sum;
// }

// console.log(arr);




//Wherefore art thou
function whatIsInAName(collection, source) {
    const sourceKeys = Object.keys(source);

    return collection.filter(function(obj){
      for (var i = 0; i < sourceKeys.length; i++){
        if(!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]){
          return false;
        }
      }
      return true;
    })
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


//Destroyer

function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments);
    //loop over the array
    for(var i = 0; i < arr.length; i++){
      //loop over arguments
      for (var j = 0; j < args.length; j++){
        if(arr[i] === args[j]){
          delete arr[i];
        }
      }
    }
    return arr.filter(Boolean);
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);