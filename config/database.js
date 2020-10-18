require('dotenv').config();
module.exports = {
  //Conexión
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,

  //Configurar seeds
  //Crea archivo json con info sobre las siembras realizadas
  //y evita que se repitan desde un mismo archivo
  seederStorage: 'json',
  seederStoragePath: 'sequelizeSeeds.json',
  // seederStorage: 'sequelize',
  // seederStorageTableName: 'sequelizeSeeds',

  //Configurar migraciones
  migrationStorage: 'sequelize',
  migrationStorageTableName: 'migrations',

  define: {
    timestamps: true,
    //Genera foreign keys en underscore
    underscored: true
  }
}

