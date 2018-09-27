/*
Given a rectangular matrix of characters,
add a border of asterisks(*) to it.
*/
function addBorder(picture) {
  picture.unshift(new Array(picture[0].length).fill('*').join(''))
  picture.push(new Array(picture[0].length).fill('*').join(''))
  for(el in picture){
    picture[el] = '*'+picture[el]+'*'
  }
return picture
}
