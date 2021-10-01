module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_Host',"reverse-marketplace.q2k9a.mongodb.net"),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME',"Reverse-marketplace"),
        username: env('DATABASE_USER',"reversemarketplace1"),
        pasword: env('DATABASE_PASSWORD',"CUAE1P0Dqiq24J1T")
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
})
