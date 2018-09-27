/*
N candles are placed in a row, some of them are initially lit.
For each candle from the 1st to the Nth the following algorithm
is applied: if the observed candle is lit then states of this
candle and all candles before it are changed to the opposite.
Which candles will remain lit after applying the algorithm to
all candles in the order they are placed in the line?
*/

function switchLights(a) {
for(let i = 0; i<a.length;i++){
  if(a[i]==1)
    a = (a.slice(0, i+1).map(a=>a=Math.abs(a-1)) + a.slice(i+1, a.length)).replace(/,/g,'').split('')
}
return a.map(a=>parseInt(a))
}
