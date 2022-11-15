require('dotenv').config()
module.exports = {
  development: {
    database: 'youbuy_development',
    dialect: 'postgres'
  },
  test: {
    database: 'youbuy_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
