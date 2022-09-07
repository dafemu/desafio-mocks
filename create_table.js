// MYSQL
const { optionsMysql } = require('./options/mariaDB');
const knexMysql = require("knex")(optionsMysql);

knexMysql.schema.dropTable('products')
.then(() => {
    console.log("Product table deleted");
});;
knexMysql.schema.createTable('products', (table) => {
    table.increments('id')
    table.string('title')
    table.integer('price')
    table.string('thumbnail')
}).then(() => {
    console.log("table products created");
}).catch(err => {
    console.log(err);
}).finally(()=>{
    knexMysql.destroy();
})

// SQLITE3
const { optionsSqlite } = require('./options/sqliteDB');
const knexSqlite = require("knex")(optionsSqlite);

knexSqlite.schema.dropTable('messages')
.then(() => {
    console.log("Messages table deleted");
});
knexSqlite.schema.createTable('messages', (table) => {
    table.increments('id')
    table.string('author')
    table.string('text')
    table.date('date')
}).then(() => {
    console.log("table messages created");
}).catch(err => {
    console.log(err);
}).finally(()=>{
    knexSqlite.destroy();
})