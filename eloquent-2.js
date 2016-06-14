function loppingATaingle() {
  var max = 7;
  var result = "#";
  for (var i = 1; i <= max; i++) {
    console.log(result);
    result = result + "#";
  }
}

/*print number from 1 to 100, with numbers divisiable by 3 "Fizz.
Numbers divisible by 5, print "Buzz"*/
function fizzBuzz() {
  var max = 100
  var result = "";

  var result = "";
  for (var i = 1; i <= max; i++) {

    if ( (i % 3 !== 0) && (i % 5 !== 0) ){
      result += i + " ";
    }

    else if ( (i % 3 === 0) && (i % 5 === 0) ){
      result += " FizzBuzz ";
    }
    else if (i % 3 === 0) {
      result += " Fizz ";
    }
    else if (i % 5 === 0) {
      result += " Buzz ";
    }
  }

  console.log(result);
}

/*a string that represents an 8×8 grid*/
function chessBoard() {
  var width = 8;
  var hight = 8;
  var result = "";

  var loopi = "";
  var loopj = "";

  for (var i = 0; i < width; i++) {
    for (var j = 0; j < hight; j++) {
      // loopj += "loopj ";
      if ((i + j) % 2 === 0){
        result += " ";
      }
      else {
        result += "#";
      }
    }
    result += "\n";
    // loopi += "loopi ";
  }

  // console.log(loopi);
  // console.log(loopj);
  console.log(result);
}

// chessBoard();
fizzBuzz();
