/*
An IP address is a numerical label assigned to each device (e.g., computer,
printer) participating in a computer network that uses the Internet Protocol
for communication. There are two versions of the Internet protocol, and
thus two versions of addresses. One of them is the IPv4 address.
IPv4 addresses are represented in dot-decimal notation, which consists of
four decimal numbers, each ranging from 0 to 255 inclusive, separated by
dots, e.g., 172.16.254.1.
Given a string, find out if it satisfies the IPv4 address naming rules.
*/

function isIPv4Address(inputString) {
   const check = /[a-z]/g
      const checkForChars = check.test(inputString)
      if(inputString.split('.').length > 4){return false}
     arr = inputString.split('.').filter(num => num <= 255 && num >= 0 && num != '')
     if(arr.length !== 4){
       return false
     }else{
       newArr = []
       for(x in arr){
         if(arr[x]>0 && arr[x][0] == 0){
           return false
         }else if(arr[x] == 0 && arr[x].length != 1){
           return false
         }else{
           newArr.push(arr[x])
         }
       }
    }
    return newArr.length === 4
}
