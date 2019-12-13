var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [{
            backgroundColor: '#00a8ed',
            borderColor: '#00a8ed',
            data: [87, 94, 56, 85, 97, 0] // Placeholder data
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                categoryPercentage: 0.5,
                barPercentage: 0.5
            }]
        }
    }
});
