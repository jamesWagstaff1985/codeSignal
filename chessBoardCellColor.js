/*
Given two cells on the standard chess board, determine whether
they have the same color or not.
*/
function chessBoardCellColor(cell1, cell2) {
  return ((cell1.charCodeAt(0) + parseInt(cell1[1])) % 2 + (cell2.charCodeAt(0) + parseInt(cell2[1])) % 2) % 2 === 0
}
