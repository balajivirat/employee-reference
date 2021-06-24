var mongoclient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';
var express = require('express');
const app = express();

app.post('/user', (req, res) => {
mongoclient.connect(url,(err, db) => {
    if(err) throw err;
    var dbmy = db.db('employee-details');
    var mydata = req.body

    dbmy.collection('signup-details').insertOne(mydata, (err, res) => {
        if(err) throw err;
        console.log("Document inserted");
        db.close();
    })
})
})
app.listen(3000); 
