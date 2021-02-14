import { createConnection } from 'typeorm'
import { Constants } from '../core/constants';

export const databaseProviders = [
  {
    provide: Constants.DatabaseConnection,
    useFactory: async () => await createConnection({
      type: 'sqlite',
      database: ':memory:',
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
      // TODO: production config
      synchronize: true,
    }),
  },
]