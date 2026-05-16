///////Create a function to read a string of the form:
// factors : multiples
//and output a string:
// result : factors : multiples

//where factors and multiples are space separated lists of integers

// Example Input : 
// 3 5 : 1 2 3 4 5 6 7 8 9

// Example Output : 
// 23 : 3 5 : 1 2 3 4 5 6 7 8 9

//keep code DRY (Don't repeat yourself)

//if you're finished, code it into a page
function sumOfMultiples(factors,numbers){
  let sum = 0;
  for (let num of numbers){
    for(let factor of factors){
      if (num % factor === 0){
        sum +=num;
        break;
      }
    }
  }
  return sum;
}
function processfactors(){
  let input = document.getElementById("inputStr").value;
  let parts=input.split(":");
  if(parts.length!==2){
    document.getElementById("output").innerText="invalid format!";
    return;
  }
  let factors =parts[0].trim().split(" ").map(Number);
  let multiples =parts[1].trim().split(" ").map(Number);
  let result = sumOfMultiples(factors,multiples);
  document.getElementById("output").innerText=alert(result+":"+factors.join(" ")+":"+multiples.join(" "));
}
  
