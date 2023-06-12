// June 12, 2023
// CodeWars: String Ends With? (7 kyu challenge)
// Description: Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending){
  
  let i = str.length - 1;
  let j = ending.length - 1;
  
  
  while(j >= 0){
    
    if(ending[j] !== str[i]){
      return false;
    } 
    
    i--;
    j--;
    
  }
  return true;
  
}
// Call function 
console.log(solution('sumo', 'omo'));




// ----- Best practices ----- //


// function solution(str, ending){
//   return str.endsWith(ending);
// }

// function solution(str, ending){
//   var l = ending.length;
//   var str = str.slice(-l);
//   return str.match(ending) ? true : false;
// }


// ----- Best practices ----- //