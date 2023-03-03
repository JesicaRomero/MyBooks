export class Book {
  public id?: number;

  constructor(
    public userId: number,
    public title: string,
    public author: string,
    public price: number,
    public photoUrl: string
  ) {}
}
