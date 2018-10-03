/*
Given a string, output its longest prefix which contains only digits.
*/
function longestDigitsPrefix(inputString) {
  return inputString.match(/^[^\s*]\d+/) === null ? "" : inputString.match(/^[^\s*]\d+/).join("")
}
