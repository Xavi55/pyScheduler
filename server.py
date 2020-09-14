import time
import json
from flask import Flask, request
from pymongo import MongoClient

config=None
with open("config.json") as f:
    config = json.load(f)
if config is None:
    print("Missing config file.")
    exit()

client = MongoClient(config["URI"])
#("mongodb://localhost")
db=client.admin
db=client.calendar
'''
class Memo():
    def __init__(self,year,mon,day,time,name,color,text,email,phNum):
        self.year=year
        self.month=mon
        self.day=day
        self.time=time
        self.name=name
        self.color=color
        self.text=text
        self.email=email
        self.phNum=phNum
    
    def insert(self):
        data={
            year:self.year
            month:self.year
            day:self.year
            time:self.year
            name:self.year
            color:self.year
            text:self.year
            email:self.year
            phNum:self.year
        }

    @staticmethod
    def p():
        print("in static")
'''
app=Flask(__name__)
@app.route("/")
def test():
    return json.dumps({"mesg":"Hello API"})

@app.route("/time")
def getTime():

    t = time.localtime()
    return json.dumps({'h':t[3],'m':t[4]})

@app.route("/fetch/<month>",methods=["GET"])
def getMemos(month):
    data=list(db.calendar.find({"month":month}))
    return json.dumps({"data":data},default=str)

@app.route("/subForm",methods=["POST"])
def saveMemo():
    data = request.json["state"]
    #x=Memo(data["year"],data["month"],data["day"],data["time"],data["name"],data["color"],data["text"],data["email"],data["phNum"])
    #Memo.p()
    db.calendar.insert_one(data)
    return json.dumps({"okay":1})

if __name__ == "__main__":
    Flask.run(app,debug=True)