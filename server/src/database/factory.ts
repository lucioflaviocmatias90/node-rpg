import faker from 'faker';

export abstract class Factory {
  protected faker;

  public constructor() {
    this.faker = faker;
  }

  public abstract make(): T;

  public abstract makeMany(length: number): Array<any>;

  public abstract create(): Promise<any>;

  public abstract createMany(length: number): Promise<Array<any>>;
}
