module.exports = function getZerosCount(number) {
  var kol_5 = number / 5;
  var kol_2 = number / 2;

  if (kol_2 < kol_5) return kol_2;
  else return kol_5;
  
}
