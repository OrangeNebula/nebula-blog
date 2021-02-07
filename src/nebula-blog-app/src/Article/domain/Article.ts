enum ArticleSubject {
  Database = 'database',
  Culture = 'culture',
}

class Article {
  constructor(
    public readonly title: string,
    public readonly contents: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly subject: ArticleSubject,
  ) {
  }
}

export { Article, ArticleSubject }