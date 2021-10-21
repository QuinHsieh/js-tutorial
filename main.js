const ctx = document.getElementById("myChart").getContext("2d");

let delayed;

//Gradient fill
let gradient = ctx.createLinearGradient(0, 0, 0 , 400);
gradient.addColorStop(0, "rgba(58, 123, 213, 1)");
gradient.addColorStop(1, "rgba(0, 210, 225, 0.5)");

const labels = [
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
];

const data = {
    labels,
    datasets: [
        { 
       data: [211, 236, 165, 350, 420, 377, 500, 375, 415],
       label: "Minecrafty Sales",
       fill: true,
       backgroundColor: gradient, 
       borderColor: "lightgray", 
       pointBackgroundColor: "gold",
       tension: 0.4,
        },
    ],
};

const config = {
    type: "line",
    data: data,
    options: {
        radius: 5,
        hitRadius: 30,
        hoverRadius: 10,
        responsive: true,
        animation :{
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if(context.type === 'data' && context.mode === "default" && !delayed) {
                    delay = context.dataIndex * 350 + context.datasetIndex * 150;     
                }
                return delay;
            },
        },
        scales: {
            y: {
                ticks: {
                    callback: function(value) {
                        return "$" + value + "m";
                    },
                },
            },
        },
    },
};

const myChart = new Chart(ctx, config);



