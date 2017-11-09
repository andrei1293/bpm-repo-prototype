google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawBarChart);
google.charts.setOnLoadCallback(drawLineChart);

function drawBarChart() {
    var data = google.visualization.arrayToDataTable([
        ['Metric',              'Value', { role: 'style' }],
        ['Tasks / Subprocesses',    7,      '6699ff'],
        ['Gateways',                2,      '#ff9900'],
        ['Start events',            1,      '#33cc33'],
        ['Intermediate events',     2,      '#cc9900'],
        ['End events',              1,      '#cc3300']
    ]);

    var view = new google.visualization.DataView(data);

    var options = {
        legend: { position: 'none' },
        chartArea: { width: '50%' }
    };

    var chart = new google.visualization.BarChart(document.getElementById('barchartMetrics'));
    chart.draw(view, options);
}

function drawLineChart() {
    var data = google.visualization.arrayToDataTable([
        ['Timestamp', 'Design shortcomings'],
        ['09-11-2017 11:23:44', 2,],
        ['09-11-2017 11:55:14', 3],
        ['09-11-2017 14:03:38', 1],
        ['10-11-2017 10:05:12', 0],
        ['10-11-2017 12:25:01', 2]
    ]);

    var options = {
        title: 'Design shortcomings',
        legend: { position: 'none' },
        chartArea: { width: '50%' },
        hAxis: { textColor: '#FFFFFF' },
        colors: ['#009933']
    };

    var chart = new google.visualization.LineChart(document.getElementById('linechartMetrics'));
    chart.draw(data, options);
}
