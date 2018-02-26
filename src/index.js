module.exports = function getZerosCount(number) {
	
	var kol_5_5 = 1,
	    kol = 0,
	    mass = [],
	    sum = 0;

	while (kol_5_5 < number){
		kol_5_5 = kol_5_5 * 5;
		mass.push (kol_5_5);
	}

	for (var i = 0; i < mass.length; i++){
		t = number / mass[i];
		sum = sum + t;
	}
	return sum;
/*  var kol_5 = 0,
  	  kol_2 = 0;
  var t5, t2;
  for (var i = 0; i < number; i++ ){
  	if( i % 5 == 0 ) kol_5++;
  	t5 = i;
  	while(true) {
	  	t5 = t5 / 5;
	  	if (t5 % 5 == 0) kol_5++;
	  	else break;
 	 }

 	if( i % 2 == 0 ) kol_2++;
  	t2 = i;
  	while(true) {
	  	t2 = t2 / 5;
	  	if (t2 % 5 == 0) kol_2++;
	  	else break;
 	 }
  }

  if(kol_5 < kol_2) return kol_5;
  else return kol2;*/
}
