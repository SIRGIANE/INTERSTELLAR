
function myFunction(e) {
    var x = document.getElementsByTagName('p');
    var i = document.getElementsByTagName('img');
    var y = document.getElementsByClassName('ll');
    if (x[e].style.display === "none") {
      x[e].style.display = "block";
      y[e].style.display = "block";
      x[e].style.animation = "plan 2s"; 
      y[e].style.animation = "blan 2s";
      i[e+1].style.animation = "ilan 2s";
      setTimeout(()=>{i[e+1].style.left = "70%";}, 1000);
      setTimeout(()=>{i[e+1].style.width = "170px";}, 1000);
    } else {
        x[e].style.animation = "plan1 2s";
        setTimeout(()=>{x[e].style.display = "none";}, 1000);
        y[e].style.animation = "blan1 2s";
        setTimeout(()=>{y[e].style.display = "none";}, 2000);
        i[e+1].style.animation = "ilan1 2s";
        setTimeout(()=>{i[e+1].style.left = "50%";}, 1000);
        setTimeout(()=>{i[e+1].style.width = "250px";}, 1000);
      }
    }