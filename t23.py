# -*- coding: utf-8 -*-
"""
Created on Sun May 24 10:45:02 2020

@author: herald jose
"""

from flask import Flask
from flask import render_template
from flask import request
import requests


app = Flask(__name__)


@app.route('/')
def hello():
    data=directdata()
    drop=dropdownmenu(data)
    return render_template('herald_test.html', states=sorted(drop.keys()))


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
        return render_template('resnew v3.html', data=printout(index))
    
       
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




                