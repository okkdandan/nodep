async function connect(params) { 

    if (global.connection)
        return global.connection.connect();

    const {Pool} = require ("pg");
    const pool = new Pool({connectionString:process.env.CONNECTION_STRING

    });
    const licenseplates = await pool.connect();
    console.log("pool ok");
    const res = await licenseplates.query ("select now()");
    console.log(res.rows[0]);
    licenseplates.release();

    global.connection = pool;
    return pool.connect();
}

connect();

async function selectlicenseplates() {
    const licenseplates = await connect();
    const res = await licenseplates.query("SELECT * FROM licenseplates");
    return res.rows;

    
}

module.exports = {
    selectlicenseplates
}