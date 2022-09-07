// MYSQL
const { optionsMysql } = require('./options/mariaDB');
const knexMysql = require("knex")(optionsMysql);

function insertProductMysql(producto){
    knexMysql("products")
    .insert(producto)
    .then(() => {
        console.log("Product inserted");
    })
    .catch((err) => {
        console.log(err);
    })
    // .finally(() => {
    //     knexMysql.destroy();
    // });
}

const { optionsSqlite } = require('./options/sqliteDB');
const knexSqlite = require("knex")(optionsSqlite);

function insertProductSqlite(message){
    knexSqlite("messages")
    .insert(message)
    .then(() => {
        console.log("Message inserted");
    })
    .catch((err) => {
        console.log(err);
    })
    // .finally(() => {
    //     knexSqlite.destroy();
    // });
}

module.exports = {
    insertProductMysql,
    insertProductSqlite,
}
