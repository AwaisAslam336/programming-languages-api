const config = {
  db: {
    host: "db4free.net",
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: "practice336",
  },
  listPerPage: 10,
};
module.exports = config;
