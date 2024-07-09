module.exports = {
  development: {
    client: "pg",
    pool: {
      min: 2,
      max: 4,
    },
    connection: "",
    migrations: {
      directory: "migrations",
    },
    seeds: {
      directory: "seeds",
    },
  },
};
