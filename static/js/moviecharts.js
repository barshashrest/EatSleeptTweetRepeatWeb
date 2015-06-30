$(function () {
    $('#containercharts').highcharts({

        credits: {
            enabled: false
        },

	chart: {renderTo: 'movie_chart',
                      type: 'line',
                      zoomType: 'x',
                      resetZoomButton: { position: { x: 0,
                                                     y: -30
                                                   }
                                       }
                      },

        title: {text: "Popularity of movie: " + moviename + "  on Twitter"},
        xAxis: {
            "type": 'datetime', "title": {"text": 'Date'}
		
        },

        series: [{
       		data: moviestats

	 }],


    });
});


$(function () {
    $('#containercharts').highcharts({

        credits: {
            enabled: false
        },

	 chart: {renderTo: 'vote_chart',
                      type: 'line',
                      zoomType: 'x',
                      resetZoomButton: { position: { x: 50,

  y: 200

}
                                       }
                      },

        title: {text: "Vote of I hate everything: " + moviename + "  on Twitter"},
        xAxis: {
            "type": 'datetime', "title": {"text": 'Date'}

        },

        series: [{
                data: voteaveragestats

         }],


    });
});

