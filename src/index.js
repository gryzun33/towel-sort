
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let result = [];
  if (!matrix || matrix.length == 0) {
      return result;
  } 

  result = matrix.map((arr, i) => {
      if (i % 2 == 0) {
        return arr.join(' '); 
      } else {
        return arr.reverse().join(' ');
      }
  });
      



  result = result.join(' ').split(' '). map(elem => Number(elem));  
  return result;
}
