
exports.min = function min (array) {
  if  (!Array.isArray(array) || (array.length === 0)) return 0;
  let min = array[0];
  for (let i = 1; i<array.length; i++){
    if (min > array[i]) min = array[i]
  }
  return min;
}

exports.max = function max (array) {
  if  (!Array.isArray(array) || (array.length === 0)) return 0;
  let max = array[0]
  for(let i=1; i < array.length; i++){
    if (max < array[i]) max = array[i]
  }
  return max;
}

exports.avg = function avg (array) {
  if  (!Array.isArray(array) || (array.length === 0)) return 0;
  let sum = 0
  const length  = array.length
  for(let i = 0; i < length; i++){
    sum += array[i]
  }
  return sum/length;
}
