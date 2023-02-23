export class Libro {
  constructor(
    public id: number,
    public userId: number,
    public title: string,
    public author: string,
    public price: number,
    public photo: string
  ) {}
}
