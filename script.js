// 1= Write a function that takes two numbers (a and b) as Sum a and Return the result
function sum(a, b) {
   return a + b;
}

// 6=Write a function that takes an object (a) and a string (b) as argument  Return true if the object has a property with key 'b' Return false otherwise
const six = (object, n) => {
    if (object[n]) {
        return true;
    } else {
        return false;
    }
};
console.log(sum);

// 4=Write a function that takes a number (a) as argument Split a into its individual digits and return them in an array.

function funch(a)
{
return String(a).split("").map(Number);
}

// 2=Write a function that takes a string as an argument. Extract the last 3 characters from the string. Return the result
const string = (value) => {
    return value.slice(-3);
};


// 5= Write a function that takes two arrays as arguments Merge both arrays and remove duplicate values Sort the merge result in ascending order Return the resulting array
const array1 = [42, 66, 75, 21, 54];
const array2 = [23, 75, 64, 56, 41];

function mergedArrays(array1, array2) {
  const numbs = new Set();
  for (x of array1) {
    numbs.add(x);
  }
  for (x of array2) {
    numbs.add(x);
  }
  const arrays = Array.from(numbs);
  return arrays.sort();
}
console.log(mergedArrays(array1, array2));




