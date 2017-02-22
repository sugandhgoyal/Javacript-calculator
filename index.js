var decimal = false;
var operator = false;
var equalto = false;
var op = ["+", "-", "*", "/"];
var x = new Array();
var text = document.getElementById('display');

//Number is clicked
if (operator == false) {
  var btt7 = document.getElementsByClassName("btn")[4];
  btt7.addEventListener('click', function() {
    x = text.value += btt7.textContent;
  });
  var btt8 = document.getElementsByClassName("btn")[5];
  btt8.addEventListener('click', function() {
    x = text.value += btt8.textContent;
  });
  var btt9 = document.getElementsByClassName("btn")[6];
  btt9.addEventListener('click', function() {
    x = text.value += btt9.textContent;
  });
  var btt4 = document.getElementsByClassName("btn")[8];
  btt4.addEventListener('click', function() {
    x = text.value += btt4.textContent;
  });
  var btt5 = document.getElementsByClassName("btn")[9];
  btt5.addEventListener('click', function() {
    x = text.value += btt5.textContent;
  });
  var btt6 = document.getElementsByClassName("btn")[10];
  btt6.addEventListener('click', function() {
    x = text.value += btt6.textContent;
  });
  var btt1 = document.getElementsByClassName("btn")[12];
  btt1.addEventListener('click', function() {
    x = text.value += btt1.textContent;
  });
  var btt2 = document.getElementsByClassName("btn")[13];
  btt2.addEventListener('click', function() {
    x = text.value += btt2.textContent;
  });
  var btt3 = document.getElementsByClassName("btn")[14];
  btt3.addEventListener('click', function() {
    x = text.value += btt3.textContent;
  });
   var btt0 = document.getElementsByClassName("btn")[16];
  btt0.addEventListener('click', function() {
    x = text.value += btt0.textContent;
  });
}
 /*don't allow number to start with 0 after an operator)
    if (operatorCheck === true && input.value[input.value.length - 1] === "0") {
      input.value = input.value.replace(/.$/, "");
      operatorCheck = false;
    }
    // clear the input and start anew when pressing number button after equal sign
    if (equalSign === true) {
      input.value = this.innerHTML;
      equalSign = false;
    // else add the number to input
    }
    */


// When operators are clicked
//Division
document.getElementsByClassName('op')[0].addEventListener('click', function() {
  operator = true;
  //Sequence do not start with an operator
  if (text.value.length == 0) {
    text.value = text.value;
  }
  //No divide sign after any operator 
  else if (text.value[text.value.length - 1] == '/' || text.value[text.value.length - 1] == '*' || text.value[text.value.length - 1] == '+' || text.value[text.value.length - 1] == '-') {
    text.value = text.value.replace(/.$/, "/");
  }  
//No divide sign after decimal
  else if (text.value[text.value.length - 1] == '.') {
    text.value = text.value;
  } else {
    x = text.value += document.getElementsByClassName('op')[0].textContent;
  }
});
//Division end

//Multiplication
document.getElementsByClassName('op')[1].addEventListener('click', function() {
  operator = true;
  //Sequence do not start with an operator
  if (text.value.length == 0) {
    text.value = text.value;
  }  
//No multiply sign after any operator 
  else if (text.value[text.value.length - 1] == '/' || text.value[text.value.length - 1] == '*' || text.value[text.value.length - 1] == '+' || text.value[text.value.length - 1] == '-') {
    text.value = text.value.replace(/.$/, "*");
  }
//No multiply sign after decimal
  else if (text.value[text.value.length - 1] == '.') {
    text.value = text.value;
  } else {
    x = text.value += document.getElementsByClassName('op')[1].textContent;
  }
});
//Multiplication end


//Subtraction
document.getElementsByClassName('op')[2].addEventListener('click', function() {
  operator = true;
//Sequence do not start with an operator
  if (text.value.length == 0) {
    text.value = text.value;
  }
//Double minus equals to a plus 
  else if (text.value[text.value.length - 1] == '-') {
    text.value = text.value.substring(0, text.value.length - 1);
    text.value += '+';
  } else {
    x = text.value += document.getElementsByClassName('op')[2].textContent;
  }
});
//Subraction end

//Addition 
document.getElementsByClassName('op')[3].addEventListener('click', function() {
  operator = true;
  x = text.value += document.getElementsByClassName('op')[3].textContent;
});
//Addition end


//When equal to is clicked
document.getElementById('equal').addEventListener('click', function() {
  text.value = eval(text.value);
  decimal = false;
  equalto = true;
});
//Start new when equalto is clicked
document.getElementsByClassName('num').addEventListener('click',function(){
 if (equalto === true) {
      text.value = this.innerHTML;
      equalto = false;
    // else add the number to input
    }
});

//When AC is clicked
document.getElementById('ac').addEventListener('click', function() {
  text.value = "";
  operator = false;
  equalto = false;
  decimal = false;
});


//When CE is clicked
document.getElementById('ce').addEventListener('click', function() {
  if (equalto === true) {
    text.value = "";
    equalto = false;
  } else {
    text.value = text.value.substring(0, text.value.length - 1);
    operator = false;
    equalto = false;
    decimal = false;
  }
});
