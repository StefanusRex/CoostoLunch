var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [{
            backgroundColor: '#00a8ed',
            borderColor: '#00a8ed',
            data: [87, 94, 56, 85, 97, 0] // Placeholder data
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        }
    }
});