import {ArticleCreateService} from './create.service';
import {ArticleCreateDto} from '../dto/create.dto';
import {Test} from '@nestjs/testing';
import {DatabaseModule} from '../../database/database.module';
import {Article} from '../article.entity';
import {articleProviders} from '../article.providers';

describe('Should create article entity successfully.', function () {
  let articleCreateService: ArticleCreateService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        Article,
        ArticleCreateService,
        ArticleCreateDto,
        ...articleProviders,
      ],
      imports: [DatabaseModule]
    }).compile();
    articleCreateService = moduleRef.get<ArticleCreateService>(ArticleCreateService);
  })

  test('Will create new article', async () => {
    const article = await articleCreateService.create(new ArticleCreateDto(
      'test title',
      'test contents',
    ));
    expect(article.title).toBe('test title');
  });
});