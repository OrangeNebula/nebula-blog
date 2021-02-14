export class ArticleCreateDto {
  constructor(
    public readonly title: string,
    public readonly contents: string,
  ) {
  }
}