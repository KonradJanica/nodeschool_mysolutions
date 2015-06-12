// (Synchoronous) Prints the sum of input parameters
//   @warn no error checking
var sum = 0;
for (var i = 2; i < process.argv.length; ++i) {
  sum += +process.argv[i];
}

console.log(sum);
