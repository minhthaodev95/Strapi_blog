module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'ec2-54-83-137-206.compute-1.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'd3s1gja0ls0jgt'),
        username: env('DATABASE_USERNAME', 'vgptrbicvaefjs'),
        password: env('DATABASE_PASSWORD', '7365e0a5abc4fa94d63816b0ea3935f4712bcf1deb7340078a65c94c9df548ee'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
