from flask import Flask
from flask import render_template
from flask import request
import requests
from datetime import datetime
from pymongo import MongoClient


app = Flask(__name__)


@app.route('/')
def hello():
    client=MongoClient("mongodb://heraldjose10:9400840572@covid-shard-00-00-9pl1n.mongodb.net:27017,covid-shard-00-01-9pl1n.mongodb.net:27017,covid-shard-00-02-9pl1n.mongodb.net:27017/covid?ssl=true&replicaSet=Covid-shard-0&authSource=admin&retryWrites=true&w=majority")
    db=client.covid
    data1,d2=get_data()
    update_data(db,data1)
    cumulative_update(db,d2)
    data=directdata()
    drop=dropdownmenu(data)
    return render_template('herald_test v1.html', states=sorted(drop.keys()))


@app.route('/test', methods=['POST', 'GET'])
def test():
    request.method == 'POST'
    statename = request.form['state']
    #take name of state as input and converts to format as in list given
    #by API.
    data=directdata()
    drop=dropdownmenu(data)
    index=drop.get(statename)
    if index==None:
        return app.send_static_file('response1.html')
    else:
        return render_template('resnew v4.html', data=printout(index))
    
       
def dropdownmenu(data):
    dict1=dict()
    for i in data:
            dict1[i.get('state')]=i
    return(dict1)


#returns json data to response html page  .     
def printout(index):
    try:
         return {
            "state": index.get('state'),
            "deaths": index.get('deaths'),
            "recovery": index.get('recovered'), 
            "total": index.get('confirmed'),
            "active":index.get('active')
        }
    except:
        pass


def directdata():
    url='https://api.covid19india.org/data.json'
    r=requests.get(url)
    return(r.json().get('statewise'))


def get_data():
    url='https://api.covid19india.org/data.json'
    r=requests.get(url)
    data1=r.json().get('statewise')
    dat2=r.json().get('cases_time_series')
    return(data1,dat2)


def update_data(db,list1):
    for i in list1:
                inputs={
                'name':i.get('state'),
                'data':[
                    {'active':i.get('active'),
                    'total':i.get('confirmed'),
                    'deaths':i.get('deaths'),
                    'recoveries':i.get('recovered'),}
                ],
                'date':datetime.utcnow()
                }
                db.covid_india_test.replace_one({'name':i.get('state')},inputs)


def cumulative_update(db,list1):
    li=list1[-3:]
    
    for i in li:
        lis=(i.get('date')).split(' ')
        months=['herald','January','February','March','April','May','June','July']
        dt=str(months.index(lis[1]))+'-'+str(lis[0])
        input1={
                'daily_conf':i.get('dailyconfirmed'),
                'daily_xed':i.get('dailydeceased'),
                'daily_rec':i.get('dailyrecovered'),
                'cum_conf':i.get('totalconfirmed'),
                'cum_xed':i.get('totaldeceased'),
                'cum_rec':i.get('totalrecovered'),
                'date':dt
                }
        
        if (bool(db.cumulative.find_one({'date': dt})))==True:
            pass
        else:
            db.cumulative.insert_one(input1)