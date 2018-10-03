/*
Given a string, find the number of different characters in it.
*/
function differentSymbolsNaive(s) {
    const count = [];
    s.split('').map(chr => count.indexOf(chr) < 0 ? count.push(chr) : console.log('asdf'));
    return count.length;
}
