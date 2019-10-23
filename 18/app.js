const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json())

let courses = [
    {
        id: 1,
        name: 'Node.js'
    },
    {
        id: 2,
        name: 'Angular'
    },
    {
        id: 3,
        name: 'JQuery'
    }
];


app.get('/', function (req, res) {
    res.send('Hello');
});


app.get('/api/courses', function  (req, res) {
    res.send(courses);
});


app.get('/api/courses/:id', function  (req, res) {
    let course = courses.find(function(course) {
        return course.id === +req.params.id;
    });
    res.send(course);
});

app.post('/api/courses', function (req, res) {
    let course = {
        id: Date.now(),
        name: req.body.name
    };
    courses.push(course);
    res.send(courses);
});

// PUT
//так как этот курс явл. ссылкой на элемент в массиве
//то после того как мы меняем его name автоматически он меняется
//в массиве так как передается по ссылке


app.put('/api/courses/:id', function  (req, res) {
    const course = courses.find(function (course) {
        return course.id === parseInt(req.params.id);
    });
    course.name = req.body.name;
    res.send(course);
});


// DELETE

app.delete('/api/courses/:id', function (req, res) {
    courses = courses.filter (function (course) {
        return course.id !== parseInt(req.params.id);
    });

    res.send(courses);
});



app.listen(port, function (){
    console.log('server at http://localhost:3000');
});


















