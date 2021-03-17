function checkSign(num){ 

if (num === 0){
    return "zero";
 }
   else if (num > 0) {
    return "positive";
 }
   else{
    return "negative";
  }
}
console.log(checkSign(10));
console.log(checkSign(-12));
console.log(checkSign(0));
module.exports = checkSign;