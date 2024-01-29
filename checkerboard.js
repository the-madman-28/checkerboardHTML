window.onload = function drawTheCells() {
    var n = prompt("Size of checkerboard? ");
    drawCheckerboard(n);
  };
  
  function drawOneCell(color) {
    var newButton = document.createElement("button");
    newButton.className = color;
    document.getElementById("board").appendChild(newButton);
  }
  
  function drawNewLine() {
    document.getElementById("board").appendChild(document.createElement("br"));
  }
  
  function drawCheckerboard(n) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if ((i + j) % 2 === 0) {
          // Even row and even column OR odd row and odd column
          drawOneCell("red");
        } else {
          // Even row and odd column OR odd row and even column
          drawOneCell("black");
        }
      }
      drawNewLine(); // Move to the next row
    }
  }
  