/*
Given an array of equal-length strings, check if it is possible to rearrange
the strings in such a way that after the rearrangement the strings at
consecutive positions would differ by exactly one character.
*/
function isNext(string1,string2){
    var diff=0;
    for(var i=0;i<string1.length;i++){
        if(string1[i]!=string2[i])
            diff++;
    }
    if (diff!=1)
        return false;
    else
        return true;
}

function arranged(array){
    var chars=true;
    for(var i=0;i+1<array.length&&chars;i++){
        if(!isNext(array[i],array[i+1]))
            chars=false;
    }
    return chars;
}
