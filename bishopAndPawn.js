/*
Given the positions of a white bishop and a black pawn on the standard chess
board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to
diagonal movement.
*/
function bishopAndPawn(bishop, pawn) {
      return Math.abs((bishop.charCodeAt(0)-96)-(pawn.charCodeAt(0)-96)) === Math.abs(bishop[1] - pawn[1])
}
