module.exports = function getZerosCount(number) {
  var ans = number / 5;
  if (number % 5 ==0) {return ans;}
  else return ans-1;
}
