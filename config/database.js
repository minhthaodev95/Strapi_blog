module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'ec2-52-17-1-206.eu-west-1.compute.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'dcls15l6m6te73'),
        username: env('DATABASE_USERNAME', 'ishxzgdyjbhhuu'),
        password: env('DATABASE_PASSWORD', 'f598f2ac30706e3c1bdf45f156924ba601fc2c86c17bdfe0156b3a551084f98e'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
