const mongoose = require('mongoose');

const employeeSchema =  mongoose.Schema({
    fullname: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    }
});

module.exports = mongoose.model('Employee', employeeSchema);  