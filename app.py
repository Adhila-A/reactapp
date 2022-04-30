from flask import  request
from flask_cors import CORS
import json
from flask import Flask,jsonify
import psycopg2


app=Flask(__name__)
CORS(app,resources={'/*':{'origins': 'http://localhost:3000'}})
@app.route('/')
def initial():
    return"initial page"

@app.route('/api')
def dumval():
            conn = psycopg2.connect(
                host="localhost",
                database="student",
                user="postgres",
                password="adhila"
                )
            conn.commit()
            return  {
        'Name':"geek", 
        "Age":"22",
        "Date":"x", 
        "programming":"python"
        }
@app.route('/database')
def dumval2():
        conn = psycopg2.connect(
                host="localhost",
                database="student",
                user="postgres",
                password="adhila"
                )
        cur=conn.cursor()
        body = request.json('list')
        print(body)
        """qry='''SELECT {} from dummydata '''.format(body)"""
        qry=('''(SELECT * from dummydata); ''')
        cur.execute(qry)
        conn.commit()
        record=cur.fetchall()
        students_data = []
        for row in record:
            student= { "ID":row[0],"NAME":row[1],  "EMAIL":row[2],"GENDER":row[3],"BOOLEAN":row[6],"HEX_COLORCODE":row[13],"COUNTRY_CODE":row[11],"PHONENUMBER":row[4],
            "PROFESSION":row[5],"SALARY":row[7],"DATE_OF_JOINING":row[8],"YEARS_OF_EXPERIENCE":row[9],
            "COUNTRY":row[10],"CURRENCY":row[12],"CARD_NUMBER":row[14]}
            students_data.append(student)
        return json.dumps(students_data, indent=4, default=str)

if(__name__)=="__main__":
        app.run(debug=True)
