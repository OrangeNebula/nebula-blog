import {Inject, Injectable} from '@nestjs/common';
import {ArticleCreateDto} from '../dto/create.dto';
import {Article} from '../article.entity';
import {Constants} from '../../core/constants';
import {Repository} from 'typeorm';

@Injectable()
export class ArticleCreateService {
  constructor(
    @Inject(Constants.ArticleRepository)
    private articleRepository: Repository<Article>,
  ) {
  }

  create(dto: ArticleCreateDto): Promise<Article> {
    const article = new Article();
    article.title = dto.title;
    article.contents = dto.contents;
    article.createAt = new Date();
    article.deleted = false;
    return this.articleRepository.save(article);
  }
}