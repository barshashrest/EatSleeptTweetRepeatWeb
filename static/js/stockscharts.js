$(function () {


        // create the chart
        $('#container').highcharts('StockChart', {

            rangeSelector: {
                selected: 1
            },

            title: {
                text: 'Tweets vs. Success for movie : '+ moviename ,
            },

            yAxis: [{
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: 'Movie Tweets'
                },
                height: '50%',
                lineWidth: 5
            }, {
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: 'Votes'
                },
                top: '65%',
                height: '50%',
                offset: 0,
                lineWidth: 5
            }],

            series: [{
                
                name: 'Number of tweets',
		type: 'column',
                data: moviestats,
            }, {
              
                
		name: 'Votes',
		type: 'column',
                data: votecount,
                yAxis: 1,
            }]
        });
});
