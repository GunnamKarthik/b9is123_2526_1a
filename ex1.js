//write a function to alert if overweight (15kg) baggage

//call it from the page

            //alert("Hello");//write a check function here...
            //update: the check function should reveal the "removed" text input
            //if the baggage is overweight
            //and a button to remove some
            //the remove function should update the weight
            //and let the user know when ok to proceed
           let check=()=>{
              alert('Checking Baggage weight: '+parseInt(document.getElementById('weight').value));
              if(parseInt(document.getElementById('weight').value)>15){
              document.getElementById('removed').style='display:block';
              document.getElementById('remB').style='display:block';
              }
              else{
                  alert("Baggage is within limit.");
                  document.getElementById('removed').style='display:none';
              document.getElementById('remB').style='display:none';
              }
            }
            let remove=()=>{
                alert('Removing weight: '+parseInt(document.getElementById('removed').value));
                if(parseInt(document.getElementById('removed').value)>parseInt(document.getElementById('weight').value)){
                    alert("cannot remove!!! Entered weight is more than current weight");
                     return;
                }
                
                let newWeight = parseInt(document.getElementById('weight').value) - parseInt(document.getElementById('removed').value);

    document.getElementById('weight').value = newWeight;

    if (newWeight <= 15) {
        alert("Baggage is within limit.");

        document.getElementById('removed').style='display:none';
              document.getElementById('remB').style='display:none';
    } else {
        alert("Still overweight... Current weight: " + newWeight + "kg");
    }
                
            }
