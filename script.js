function ryanwagkangsusuko() {

  var an = parseFloat(document.getElementById("an").value);
  var a1 = parseFloat(document.getElementById("a1").value);
  var n = parseFloat(document.getElementById("n").value);
  var d = parseFloat(document.getElementById("d").value);


  //
  if (a1 && an && n ) {
    var arithmetic = (n/2)*(a1 + an);
    alert(arithmetic);
  }
  else if (a1 && n && d ) {
    var arithmetic6 = (n/2)*((2*a1)+((n-1)*d));
    alert(arithmetic6);
  //
  }
  else if (isNaN(an,a1,n,d)) {
   alert("Please fill up the blanks");
  }
 //
  else if (isNaN(n,d)) {
    var OptionChosen = prompt("Please enter 1, if finding the sum of odd numbers and 2, if even: ");
    if (OptionChosen === null ) {
      return; //break out of the function early
    }
    else if (OptionChosen == 1) {
    var arithmetic2 = (a1+an)/2;
    var arithmetic3 = arithmetic2**2;
    alert(arithmetic3)
    }
    else if (OptionChosen == 2) {
    var arithmetic4 = ((a1+an)/2)-1;
    var arithmetic5 = arithmetic4*(arithmetic4+1);
    alert(arithmetic5);
    }
    else {
      alert("Please input only the choices 1 and 2.");
    }
  }
  else{
   alert(":>");
  }
}

//<!-- CREATED BY RYAN :> -->