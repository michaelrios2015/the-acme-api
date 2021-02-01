const Sequelize = require('sequelize');
const { STRING } = Sequelize;

const config = {  ssl: {
    rejectUnauthorized: false
  }};
// if(process.env.SSL){
//     console.log('--------------yes-------------------');
//     config.dialectOptions = {
//         ssl : {
//             rejectUnauthorized: false
//         }
//     };
// }

const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:JerryPine@localhost/acme_db');

const Product = conn.define('product', {
    name: STRING,
});

const syncAndSeed = async()=> {
    await conn.sync({ force: true });
    await Product.create({ name: 'foo' });
    await Product.create({ name: 'bar' });
};

module.exports = {
    syncAndSeed,
    models: {
        Product
    }
}