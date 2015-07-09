$(function () {
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Movies trending on Twitter on ' + releasedayGET
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of tweets'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Number of tweets in '+ releasedayGET + ':  <b>{point.y:.1f} </b>'
        },
        series: [{
            name: 'Per day tweets',
            data: releasedaystats,
            color: '#67D7B3', 
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#D2EFED',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
});
