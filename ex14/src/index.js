function myForLoop1 () {
    var evenNumbers;
   for (var i = 0; i < 9; i += 2){
       console.log(i);
   
 }
return evenNumbers;

}

function myForLoop2 () {
    var evenInverseNumbers;
    for (var i = 8; i >= 0; i -= 2) {
        console.log(i);

    }
 return evenInverseNumbers;   
}

    
   
myForLoop1();
myForLoop2();
module.exports = {
    myForLoop1,
    myForLoop2
};

