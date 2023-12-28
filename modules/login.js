const jwt = require('jsonwebtoken');
const dbConfig = require('./dbConfig');

const login = (app) => {
    app.post('/login', (req, res) => {
        const { id, password } = req.body;
        const selectResult = dbConfig.db.select(`select * from user where id = ${id}`);
    });
};
