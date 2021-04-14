const canvas = document.getElementById("pixelCanvas");

sizePicker.addEventListener('submit', function(event) {
  event.preventDefault();
  makeGrid();
})

function makeGrid() {
  canvas.innerHTML = null;
    for(x = 0; x < inputHeight.value; x++) {
      let columns = canvas.insertRow(x);
      for(y = 0; y < inputWidth.value; y++) {
        let cell = columns.insertCell(y);
  cell.addEventListener('click', function(event)  {
    cell.style.backgroundColor = colorPicker.value;
      });
    }
  }
}
