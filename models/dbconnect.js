const mongoose = require("mongoose");


mongoose.connect('mongodb://localhost:27017/EmployeesDB', 
                 {useNewUrlParser:true, useUnifiedTopology:true}, (err) => {
    if (!err) { console.log('Mongo DB connection succeded.') }
    else { console.log('Error in DB connection:' + err ) }
});


require('./employeemodel');