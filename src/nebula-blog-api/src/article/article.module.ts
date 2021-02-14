import {Module} from '@nestjs/common';
import {Article} from './article.entity';
import {articleProviders} from './article.providers';
import {ArticleCreateService} from './service/create.service';
import {ArticleCreateDto} from './dto/create.dto';

@Module({
  providers: [
    Article,
    ArticleCreateService,
    ArticleCreateDto,
    ...articleProviders,
  ]
})
export class ArticleModule {}
