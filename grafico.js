function generarGrafico() {
	var Rufino = document.getElementById("Rufino").value;
	var Cibelis = document.getElementById("Cibelis").value;
    var Snayder = document.getElementById("Snayder").value;
    var Felo = document.getElementById("Felo").value;
	var datos = [Rufino, Cibelis, Snayder, Felo];

	var grafico = new Chart(document.getElementById("grafico"), {
		type: 'bar',
		data: {
			labels: ['Rufino ', 'Cibelis ', 'Snayder ', 'Felo '],
			datasets: [{
				label: 'Datos ingresados',
				data: datos,
				backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
				borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		}
	});
}
