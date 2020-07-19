//javascript function that will make grid once submit button is clicked
function makeGrid() {
  var height = document.getElementById('input_height').value;
  var width = document.getElementById('input_width').value;
  var table = document.getElementById('pixel_canvas');

//create table grid:
  table.innerHTML = '';
  var tbody = document.createElement('tbody');
  for (var i = 0; i < height; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < width; j++) {
          var td = document.createElement('td');
          td.appendChild(document.createTextNode(''));
          tr.appendChild(td);
      }
      tbody.appendChild(tr);
  }
  table.appendChild(tbody);
}

//change color of pixel
$('body').on('click', 'td', function() {
var color = document.getElementById('colorPicker').value;
  $(this).css('background-color', color);
});