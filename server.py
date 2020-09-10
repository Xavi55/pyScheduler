import time
import json
from flask import Flask

app=Flask(__name__)

@app.route("/time")
def getTime():

    t = time.localtime()
    return json.dumps({'h':t[3],'m':t[4]})

if __name__ == "__main__":
    Flask.run(app,debug=True)