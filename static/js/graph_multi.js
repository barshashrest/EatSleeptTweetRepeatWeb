$(function () {

    $(document).ready(function() {

	var movie_trend = new Highcharts.Chart({
              chart: {renderTo: 'movie_trend',
                      type: 'line',
                      zoomType: 'x',
                      resetZoomButton: { position: { x: 0,
                                                     y: -30
                                                   }
                                       }
                      },

	title: {"text": "Trend of talk of " + movie + " on Twitter"},

	xAxis: {"type": 'datetime', "title": {"text": 'Date'}},
        yAxis: {"title": {"text": '# of Messages'}, "min": 0},
	series: [{"name": county + ", " + state, "data": historical_data}],
	exporting: {
		







	});
