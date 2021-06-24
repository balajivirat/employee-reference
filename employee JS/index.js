bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017'

const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.static('public'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/user', cors(), (req, res) => {
    console.log(req.body);
    console.log("click");
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        var mydb = db.db('users');
        var data = [req.body];
        console.log('dataaa',req.body);
        mydb.collection('usersDetails').insertMany(data, (err, res) => {
            if (err) throw err;
            console.log('doc inserted');
            db.close();
        });
    });
});

app.get('/users', cors(), (req, res) => {
    console.log(req.body);
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        var mydb = db.db('users');
        
        mydb.collection('usersDetails').find({}).toArray((error, data) => {
            if (error) {
                manageError(res, err.message, "Failed to get contacts.");
            } else {
                res.status(200).json(data);
            }
        });

    });
})
app.post('/get', cors(), (req, res) => {
    console.log('.....................................',req.body);
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        var mydb = db.db('users');
        var datas = req.body;
        mydb.collection('usersDetails').find(datas).toArray((error, data) => {
            console.log(data);
            res.send(data);
            // if (error) {
            //     manageError(res, err.message, "Failed to get contacts.");
            // } else {
            //     // res.status(200).json(data);
            //     res.send(data);
            // }
        });

    });
})

app.post('/content', cors(), (req, res) => {
    console.log(req.body);
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        var mydb = db.db('users');
        var data = [req.body];
        console.log('dataaa',req.body);
        mydb.collection('usersContent').insertMany(data, (err, res) => {
            if (err) throw err;
            console.log('Content inserted');
            db.close();
        });
    });
});

app.get('/content', cors(), (req, res) => {
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        var mydb = db.db('users');
        mydb.collection('usersContent').find({}).toArray((error, data) => {
            if (error) {
                manageError(res, err.message, "Failed to get contacts.");
            } else {
                res.status(200).json(data);
            }
        });

    });
})

app.delete('/delete/:id', function (req, res) {
    // console.log(req.body);
    console.log("clcik");
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        var mydb = db.db('users');
        var id = req.params.id;
        console.log('dataaa.............',{ _id: ObjectId(id) });
        console.log('dataaa.............',{ _id: ObjectId(req.params.id) });
        mydb.collection('usersContent').deleteOne({ _id: ObjectId(id) }, function (err, results) {
            if (err) throw err;
            console.log('Content Deleted');
            db.close();
        });
    });
});

// app.delete('/delete/:id', function (req, res) {
//     MongoClient.connect(url, (err, db) => {
//         if (err) throw err;
//         var id = req.params.id;
//         var mydb = db.db('users');
//         mydb.collection('usersContent').deleteOne({ _id: ObjectId(id) }, function (err, results) { });
//         res.json({ success: id })
//     });
// });

// app.put('/edit', cors(), (req, res) => {
//     console.log(req.body);
//     MongoClient.connect(url, (err, db) => {
//         if (err) throw err;
//         var mydb = db.db('users');
//         var data = [req.body[1]];
//         var datas = [req.body[0]];
//         console.log('dataaa1111111111.............',data);
//         console.log('dataaa00000000000.............',datas);
//         mydb.collection('usersContent').updateOne({ empid: "" + data },{ $set: {datas}}, (err, res) => {
//             if (err) throw err;
//             console.log('Content updated');
//             db.close();
//         });
//     });
// });

app.put('/posts/update/:id', (req, res) => {
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        var id = req.params.id;
        var data = req.body;
       posts.updateOne({ _id: ObjectId(id) }, { $set: data }, (err, res) => {
            if (err) throw err;
            db.close();
        });
        res.send(res.ops)
    });
});

app.listen(3000);


