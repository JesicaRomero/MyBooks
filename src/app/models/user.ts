export class User {
  public id?: number;

  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public photoUrl: string
  ) {}
}
