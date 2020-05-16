const express = require('express');
const app = express();
const dbconnect = require('./models/dbconnect');
const bodyparser = require('body-parser');
var format = require('date-format');
var moment = require('moment');
var url = require('url');

app.use(bodyparser.json());

PORT = process.env.port || 5000
// const path = require('path');
// const exphbs = require('express-handlebars');

const employeeController = require('./controllers/employeeController');
app.use('/employee', employeeController); //thisismiddleware

// app.set('views', path.join(__dirname, '/views/'));
// app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mailLayout', layoutsDir: __dirname + '/views/layouts/' }));
// app.set('view engine', 'hbs');

dbconnect;

app.get('/', (req, res)=> {
    res.json('welcome to employee home page...');
});

app.get('/format', (req, res)=> {            //this is for the dateformattypeAPI workaround
    res.send('here the date format page...');
    let d = new Date();

    console.log(d.toString());
    console.log(d.toISOString());
    console.log(d.getFullYear());
    console.log(d.getMonth());
    console.log(d.getDate());
    console.log(d.getHours());
    console.log(d.getMinutes());
    console.log(d.getSeconds());

    console.log(d.toLocaleString("en-AU"));
    console.log(d.toLocaleString("en-US"));

    console.log(JSON.stringify({
        myDate: d
    }));
});

app.get('/formattype', (req, res)=> {
    res.json("format types will be of the date, time, datetime");
    //console.log(req.params);
    console.log(req.query);
    res.send(req.params.formatType);
    res.json(req.params.formatType);
    values:["MM/dd/yy","MM-dd-yy","MM-dd-yyyy"]
    
});

app.get('/example/:name/:age', (req, res)=> {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name + ' : ' + req.params.age);
});

app.listen(PORT, ()=> {
    console.log(`server started at port: ${PORT}`)
});

