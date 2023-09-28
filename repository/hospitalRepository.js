const connection = require("../config/mysql.js")

const table = "rumah_sakit"

async function getAllHospital() {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    })
}

async function getHospitalById(id) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE id_rs = ${id}`, (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    })
}

async function addHospital({ nama_rs, alamat }) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${table} (nama_rs,alamat) VALUES ('${nama_rs}', '${alamat}')`, (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    })
}


module.exports = {
    getAllHospital,
    getHospitalById,
    addHospital
}