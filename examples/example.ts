import * as b from 'bobril';
import "bobril-flex-ie10";
import * as m from 'bobril-m';
import * as Container from './components/container';
import * as Layout from './components/layout';
import * as ChartJS from '../index';

// All definitions of charts are copied from http://www.chartjs.org/docs/

m.initRobotoFonts();

let lineChartData = [65, 59, 80, 81, 56, 55, 40];
// *********************************************************************************
// ************************* Example of bobril-chartjs usage ***********************
// *********************************************************************************
b.init(() => {
    return [
        Layout.create({
            header: 'bobril-chartjs',
            description: [
                'Data definitions of charts were taken in original ',
                {tag: 'a', attrs: {href: 'http://www.chartjs.org/docs/'}, children: 'Chart.js documentation'}, '.',
                b.styledDiv('You will find there a more detailed explanation of all properties used in examples.', {display: 'block'}),
                b.styledDiv('Examples below are just for imagination. All opportunities of library are discussed in documentation.', {display: 'block'})
            ],
            examples: [
                Container.create({
                    label: 'Bar chart',
                    content: ChartJS.create({
                        type: barChart.type,
                        data: barChart.data,
                        options: barChart.options
                    })
                }),
                Container.create({
                    label: 'Line chart',
                    content: ChartJS.create({
                        type: lineChart.type,
                        data: lineChart.data
                    })
                }),
                Container.create({
                    label: 'Line chart - dynamic data',
                    content: [
                        m.Button({
                            type: m.ButtonType.Raised,
                            children: 'RE-GENERATE',
                            action: () => {
                                lineChartData = [...lineChartData].map((item) => {
                                    return Math.random() * 100
                                });
                                b.invalidate();
                            }
                        }),
                        ChartJS.create({
                            type: lineChart.type,
                            data: lineChart.data,
                            updateData: (chart) => {
                                // Here you can change data in datasets.
                                // Param chart is direct reference to Chart.
                                // After you update data, then bobril call update() on Chart object
                                chart.data.datasets[0].data = [...lineChartData];
                                return chart;
                            }
                        })
                    ]
                }),
                Container.create({
                    label: 'Radar chart',
                    content: ChartJS.create({
                        type: radarChart.type,
                        data: radarChart.data,
                    })
                })
            ]
        })
    ]
});

// *********************************************************************************
// ******************************** Data definition ********************************
// *********************************************************************************
interface IChartDefinition {
    type: string;
    data: any;
    options?: any;
}

let barChart: IChartDefinition = {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
        }
        ]
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
};

let lineChart: IChartDefinition = {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [...lineChartData],
                spanGaps: false,
            }
        ]
    }
};

let radarChart: IChartDefinition = {
    type: 'radar',
    data: {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgba(179,181,198,0.2)",
                borderColor: "rgba(179,181,198,1)",
                pointBackgroundColor: "rgba(179,181,198,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(179,181,198,1)",
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBackgroundColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255,99,132,1)",
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]
    }
};