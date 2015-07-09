from cassandra.cluster import Cluster
from flask import Flask, request, render_template
#from app import app
from flask_cassandra import CassandraCluster
import json
import time


cluster = Cluster(['52.8.153.198'])
#session = cluster.connect('bs_worker')

app = Flask(__name__)

@app.route("/index", methods =['GET', 'POST'])
def main_page():
  if request.method == 'GET':
        return render_template('index.html', graph = False)

  elif request.method == 'POST':

	cassandra = CassandraCluster()
	app.config['CASSANDRA_NODES'] = ['52.8.153.198']
  	
	movienameGET= request.form["first"]
	session = cassandra.connect()
  	session.set_keyspace("movietweets")
	print movienameGET
        cql = "SELECT * FROM correlationtable7 WHERE moviename = '%s'" % (movienameGET)
	movie_results = session.execute(cql)

  	def date_to_milli(time_tuple):
        	epoch_sec = time.mktime((1970, 1, 1, 0, 0, 0, 0, 0, 0))
        	return 1000*int(time.mktime(time_tuple) - epoch_sec)

  	moviestats=[]
  	numtweets=[]
  	vardate=[]
  	moviename=''
  	voteaveragestats=[]
  	votecount = []
  	for result in movie_results:
        	year=result[1]
        	month=result[2]
        	day=result[3]

        	vardate.append(date_to_milli((year, month, day, 0, 0, 0, 0, 0, 0)))
        	numtweets.append(result[6])
        	moviestats.append([date_to_milli((year, month, day, 0, 0, 0, 0, 0, 0)), result[6]])
        	moviename=result[0]
        	voteaveragestats.append([date_to_milli((year, month, day, 0, 0, 0, 0, 0, 0)), result[7]])
        	votecount.append([date_to_milli((year, month, day, 0, 0, 0, 0, 0, 0)), result[8]])	
        return render_template("moviecharts.html", vardate=vardate, numtweets=numtweets, moviestats=moviestats, moviename=moviename, voteaveragestats=voteaveragestats, votecount=votecount, graph =True)

@app.route("/index/releasedate", methods =['GET', 'POST'])
def show_releasedaycharts():
  if request.method == 'GET':
        return render_template('index_rd.html')

  elif request.method == 'POST':
        cassandra = CassandraCluster()
        app.config['CASSANDRA_NODES'] = ['52.8.153.198']

        releasedayGET= request.form["second"]
        year = int(releasedayGET[0:4])
        month = int(releasedayGET[5:7])
        day = int(releasedayGET[8:10])
        session = cassandra.connect()
        session.set_keyspace("movietweets")
        cql = "SELECT * FROM correlationtable7 WHERE year = %d AND month = %d AND day = %d ALLOW FILTERING" % (year, month, day)
        movie_results = session.execute(cql)

        def date_to_milli(time_tuple):
                epoch_sec = time.mktime((1970, 1, 1, 0, 0, 0, 0, 0, 0))
                return 1000*int(time.mktime(time_tuple) - epoch_sec)

        releasedaystats = []
        for result in movie_results:
                movie = result[0].encode('ascii','ignore')
                releasedaystats.append([movie, result[6]])


        print releasedayGET
        return render_template('releasedaycharts.html', releasedaystats= releasedaystats, releasedayGET = releasedayGET)

@app.route("/index/slides")
def show_slides():
  return render_template("slides.html")

if __name__ == "__main__":
  app.run(host='0.0.0.0', debug=True)
