/*
Given an array of integers,
replace all the occurrences of elemToReplace with substitutionElem.
*/
function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map(i => i == elemToReplace ? substitutionElem : i)
}
