
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if(arguments.length==0 || matrix.length==0)
  return []


let arr=[]

for(i=0;i<matrix.length;i++){
  if(i%2==0)
  arr.push(matrix[i])
  else
  arr.push(matrix[i].reverse())
}

let result=[]

for(k=0;k<arr.length;k++){
  for(j=0;j<arr[k].length;j++)
result.push(arr[k][j])
}

return result
}

