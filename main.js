$(document).ready(function() {
	// write your code here
		$.getJSON("data.json", function(data){
			data = data.reverse();
			for (i=0; i < data.length; i++){
				var name = data[i].name;
				var description = data[i].description;
				var location = 'https://www.google.com/maps?q=' + data[i].location[0] + ',' + data[i].location[1];
				var originalTable = document.getElementById('table')
				var addRow = originalTable.insertRow(1);
				var cell1 = addRow.insertCell(0)
				var cell2 = addRow.insertCell(1)
				var cell3 = addRow.insertCell(2)
					cell1.innerHTML = name;
					cell2.innerHTML = description;
					cell3.innerHTML = location;
			// $('#table').append('<tr><td>name</td><td>description</td><td>location</td></tr>');
		}	
			}
		)
	});