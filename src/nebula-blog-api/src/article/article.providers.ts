import { Article } from './article.entity';
import { Connection } from 'typeorm';
import { Constants } from '../core/constants';

export const articleProviders = [
  {
    provide: Constants.ArticleRepository,
    useFactory: (connection: Connection) => connection.getRepository(Article),
    inject: [ Constants.DatabaseConnection ],
  }
]