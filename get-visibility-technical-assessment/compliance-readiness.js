var config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                83,
				17
            ],
                backgroundColor: [
                "#27e375",
				"#4d4a44"
            ],
        }, {
            data: [                
				75,
				25
            ],
                backgroundColor: [
                "#f0bc43",
                "#4d4a44"
            ],
        }, {
            data: [
                62.5,
                33.5
            ],
                backgroundColor: [
                "#f54c62",
                "#4d4a44"
            ],
        }]
    },
    options: {
        responsive: true,
		tooltips: {
			enabled: false
		}
    }
};

var ctx = document.getElementById("ChartArea").getContext("2d");
var myDoughnut = new Chart(ctx, config);