const knex = require('knex');
require('dotenv').config();

module.exports = {
    db: knex({
        client: 'mysql',
        connection: {
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE || 'board',
        },
        pool: {
            min: 0,
            max: 10
        },
        log: {
            warn(msg) { console.warn(msg) },
            error(msg) { console.error(msg) },
            deprecate(msg) { console.log(msg) },
            debug(msg) { console.log(msg) }
        },
        debug: true
    })
}