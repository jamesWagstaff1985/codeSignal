/*
n the popular Minesweeper game you have a board with some mines and those
cells that don't contain a mine have a number in it that indicates the
total number of mines in the neighboring cells. Starting off with some
arrangement of mines we want to create a Minesweeper game setup.
*/

function minesweeper(matrix) {
  let newMatrix = []
      for(let i = 0; i < matrix.length; i++){
        newMatrix[i] = new Array()
        for(let j = 0; j < matrix[i].length; j++){
          let count = 0;
          if(typeof(matrix[i-1]) !== 'undefined'){
            if(typeof(matrix[i-1][j-1]) !== 'undefined' && matrix[i-1][j-1]){count++}
            if(typeof(matrix[i-1][j])   !== 'undefined' && matrix[i-1][j]){count++}
            if(typeof(matrix[i-1][j+1]) !== 'undefined' && matrix[i-1][j+1]){count++}
          }

          if(typeof(matrix[i][j-1]) !== 'undefined' && matrix[i][j-1]){count++}
          if(typeof(matrix[i][j+1]) !== 'undefined' && matrix[i][j+1]){count++}

          if(typeof(matrix[i+1]) !== 'undefined'){
              if(typeof(matrix[i+1][j-1]) !== 'undefined' && matrix[i+1][j-1]){count++}
              if(typeof(matrix[i+1][j])   !== 'undefined' && matrix[i+1][j]){count++}
              if(typeof(matrix[i+1][j+1]) !== 'undefined' && matrix[i+1][j+1]){count++}
          }
          newMatrix[i].push(count)
        }
      }
      return newMatrix
}
