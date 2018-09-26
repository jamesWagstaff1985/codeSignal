/*
Ticket numbers usually consist of an even number of digits.
A ticket number is considered lucky if the sum of the first half
of the digits is equal to the sum of the second half.
Given a ticket number n, determine if it's lucky or not.
*/
function isLucky(n) {
    n = n.toString()
      let partA = 0;
      let partB = 0;
      for(let i = 0; i < n.length; i++){
        if(i < n.length / 2) console.log(n[i])
        i < n.length / 2 ? partA += parseInt(n[i]) : partB += parseInt(n[i]);
      }
    return partA == partB;
}
