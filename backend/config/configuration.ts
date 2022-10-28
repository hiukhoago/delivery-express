import { Builder } from "builder-pattern"
import { Configuration } from "entities/shared/configuration.interface"

export default () =>
  Builder<Configuration.Configure>()
    .database({
      mongoUrl: process.env.MONGO_URL || 'mongodb+srv://admin:iIEQTPQ8WYfzTWRw@delivery.13pqhs8.mongodb.net/?retryWrites=true&w=majority',
      mongoDbs: process.env.MONGO_NAME || 'delivery',
    })
    .security({
      authentication: {
        jwt: {
          secret: process.env.JWT_SECRET || 'NDhjNjk1NTM3NWRlNjc1NDMwZjllNWFiMmVlYjQ4NzViYzY4MmY5ZWY2MzZhMzNiMTYxYmNlYjJkMWYwNDk0NDBlNDYwZThjMmFmNzAyNTQyOWYxMDhkM2QxYTQ3ZDFjM2I5YWU4YWVjOGRhNDc3MWE5OTExMzUyMjI3MDlmZWM'
        }
      }
    })
    
    .build()
