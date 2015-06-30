$(function () {

    $(document).ready(function() {
	var daily_ratings = new Highcharts.Chart({
              	chart: {renderTo: 'daily_ratings',
                      	type: 'line',
                      	zoomType: 'x',
                      	resetZoomButton: { position: { x: 0,
                                                     y: -30
                                                   }
                                       }
                      	},
		
		

			title: {"text": "Daily popularity of   + moviename" },
              		xAxis: {"type": 'datetime', "title": {"text": 'Date'}},
              		yAxis: {"title": {"text": 'Popularity'}, "min": 0},
			series: [{"name": "popularity of , moviename ", "data":[20, 30] }],
		exporting:{
			filename:'whatever'
			}		
	});
});

