let i = null; 

function set() {
  var input = document.getElementById("input").value;
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;

  let timer = parseInt(input);
  let timer1 = parseInt(input1);
  let timer2 = parseInt(input2);

  function counter() {
    if (timer >= 1) {
      timer--;

      if (timer === 0) {
        if (timer1 >= 1) {
          timer1--;
          timer = 59;
        }

        if (timer1 === 0 && timer2 >= 1) {
          timer2--;
          timer1 = 59;
        }
      }

      document.getElementById("hours").innerHTML = timer2;
      document.getElementById("minutes").innerHTML = timer1;
      document.getElementById("seconds").innerHTML = timer;
    }
  }

  i = setInterval(counter, 1000);
}

function stop() {
  clearInterval(i); 
}
