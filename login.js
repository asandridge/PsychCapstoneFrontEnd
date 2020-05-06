var { Client } = require('pg');
var bcrypt = require('bcryptjs');

function allDefined(req){
    if(typeof(req.email) === 'undefined'){
        return false;
    }
    if(typeof(req.password) === 'undefined'){
        return false;
    }
    return true;
}

module.exports = {
    login: async function(req){
        if(!allDefined(req)){
            return new Promise(function(resolve, reject){
                reject("Missing parameter");
            })
        }

        const pgClient = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: true,
        });

        pgClient.connect();

        //TODO: password hashing
        let res = await pgClient.query("SELECT * FROM users WHERE email = $1", [req.email.toLowerCase()]);
        if(res.rows.length == 0){
            pgClient.end();
            return new Promise(function(resolve, reject){
                reject("Account not found");
            })
        }

        pgClient.end();

        let match = await bcrypt.compare(req.password, res.rows[0].hashedpassword);

        if(match){
            let sendObject = {
            token: res.rows[0].userid //TODO: implement token
            }

            return new Promise(function(resolve, reject){
                resolve(sendObject);
            })
        }
        else{
            return new Promise(function(resolve, reject){
                reject("Account not found");
            })
        }
        
    }
}