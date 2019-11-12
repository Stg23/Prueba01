let ctx=document.getElementById("miGrafico").getContext('2d');
let miGrafico = new Chart(ctx,{
    type: 'bar',
    data: {
        labels: ['Soltero', 'Casados', 'Divorciados', 'Viudos', 'Convivientes'],
        datasets: [{
            label: '# Personas con estado civil',
            data: [12, 19, 30, 8, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3
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

let ctx1 = document.getElementById("miGrafico1").getContext("2d");
let miGrafico1=new Chart(ctx1,{
    type: 'horizontalBar',
    data: {
        labels: ['Gen. 3', 'Gen. 5', 'Gen. 6', 'Gen. 7', 'Gen. 9'],
        datasets: [{
            label: '# Procesadores',
            data: [4, 8, 16, 32, 64],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 152, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 122, 255, 0.2)',
                'rgba(255, 119, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 9
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

let ctx2=document.getElementById("miGrafico2").getContext('2d');
let miGrafico2 = new Chart(ctx2, {
    type: 'line',
    data:
     {labels: ['Gen. 3', 'Gen. 5', 'Gen. 6', 'Gen. 7', 'Gen. 9'],
    datasets: [{
        label: '# Procesadores',
        data: [4, 8, 16, 32, 64],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 3
    }]

    },
    options: {
        tooltips: {
            mode: 'point'
        }
    }
});

// simular cambio de datos en tiempo real

let random =()=>{
    return Math.random()*(30-0)+0;
}

setInterval(() => {
    miGrafico2.data.datasets[0].data=[random(),random(),random(),random(),random(),];
    miGrafico2.update();
}, 1000);