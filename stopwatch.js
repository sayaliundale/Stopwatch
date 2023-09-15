function set() {
    var input = document.getElementById("input").value;
    var input1= document.getElementById("input1").value;
    
    let left = parseInt(input); 
    let left1=parseInt(input1);
  
    
  
  function counter() {
    if (left >= 1) {
      left--;
      if (left == 0) {
        left1--;
        document.getElementById("minutes").innerHTML = left1;
        left = 60; // Reset left to 60 when it reaches 0
      }
      document.getElementById("seconds").innerHTML = left;
    }
  }
  
  // Call the counter function every second (1000 milliseconds)
  setInterval(counter, 1000);
  
   
  
    const time=setInterval(counter,1000);
    
    
    
  }