const mongoose = require('mongoose');

const DataBase = () => {
    const DB1 = mongoose.createConnection(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    DB1.once('open', () => console.log("DataBase 1 Connected :" + DB1.host));
    DB1.on('error', err => console.log("DataBase 1 ERROR :" + err));

    const DB2 = mongoose.createConnection(process.env.MONGO_URI_1, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    DB2.once('open', () => console.log("DataBase 2 Connected :" + DB2.host));
    DB2.on('error', err => console.log("DataBase 2 ERROR :" + err));

    const DB3 = mongoose.createConnection(process.env.MONGO_URI_2, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    DB3.once('open', () => console.log("DataBase 3 Connected :" + DB3.host));
    DB3.on('error', err => console.log("DataBase 3 ERROR :" + err));

    const DB4 = mongoose.createConnection(process.env.MONGO_URI_3, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    DB4.once('open', () => console.log("DataBase 4 Connected :" + DB4.host));
    DB4.on('error', err => console.log("DataBase 4 ERROR :" + err));

    return { DB1, DB2, DB3, DB4 };
};

module.exports = DataBase; 
