/*
Check if all digits of the given integer are even.
*/
function evenDigitsOnly(n) {
        return n.toString().split('').map(i => i % 2 === 0 ? true : false).filter(i => i == false).length === 0
}
