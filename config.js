// Runtime settings. Everything the app needs from its environment is read here.
module.exports = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 8080,
  databaseUrl: process.env.DATABASE_URL,
  pageSize: 20,
};