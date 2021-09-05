module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'ec2-18-209-153-180.compute-1.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'df5lfd9c75nm39'),
        username: env('DATABASE_USERNAME', 'blqbojmsgxmzad'),
        password: env('DATABASE_PASSWORD', 'cf8420705ec60eaa7779b3335ad1ad936f113afd41a17c7a342afe820e60e465'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
