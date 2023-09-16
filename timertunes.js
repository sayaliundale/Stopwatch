let i = null; 
let Audio1=null;
let volume=1.0;

function set() {
  var input = document.getElementById("input").value;
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;

  let timer = parseInt(input);
  let timer1 = parseInt(input1);
  let timer2 = parseInt(input2);
 
  if(isNaN(timer2)){
    timer2=0
  }
  if(isNaN(timer1)){
    timer1=0
  }
  if(isNaN(timer)){
    timer=0
  }
 
 Audio1 = document.getElementById("audio");
  
  function counter() 
  {
    if(timer===0 && timer1===0 && timer2===0){
      document.getElementById("stop").style.visibility="hidden";
      document.getElementById("resume").style.visibility="hidden";
      document.getElementById("set").style.visibility="hidden";
      document.getElementById("pause").style.display="block";
      
     Audio1.play();
     volume=Audio1.volume;
    }
    
    
    if(timer === 0) {
      
      if(timer1 > 0) 
      {
        timer1--;
        timer = 59;
        
      } 
      else if(timer2 > 0)
      {
        timer2--;
        timer1 = 59;
      }
    } 
    else{
      timer--;
    }

      document.getElementById("hours").innerHTML = timer2;
      document.getElementById("minutes").innerHTML = timer1;
      document.getElementById("seconds").innerHTML = timer;
    }
  

  i = setInterval(counter, 1000);
}

function stop() {
  clearInterval(i); 
}
function audiop() {
  if (Audio1) { 
    Audio1.pause();
    Audio1.volume=0;
  
  }
}
audiop();







