module.exports = function getZerosCount(number) {
  var kol;

  for (var i = 0; i < number; i++ ){
  	if(i % 10 == 0) kol++;
  }
  return kol;
}
