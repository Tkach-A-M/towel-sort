
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let total = [];

  if(!matrix){
    return total;
  }
  else{
    for(let i = 0; i < matrix.length; i++){
      if(i % 2 == 1){
        matrix[i] = matrix[i].reverse();
      }
      total.push(...matrix[i]);
    }
  }

  return total;
}
