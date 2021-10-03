module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('DATABASE_URI',"mongodb+srv://reversemarketplace1:AODr1gofW8bwPAKy@reverse-marketplace.q2k9a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME',"Reverse-marketplace"),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
})