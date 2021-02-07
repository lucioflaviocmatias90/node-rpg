import faker from 'faker';
import { getRepository } from 'typeorm';

export class Factory {
  protected faker;
  public _data: any;
  public _model: any;

  public constructor() {
    this.faker = faker;
  }

  get data() {
    return this._data;
  }

  get model() {
    return this._model;
  }

  public make<T>(data?: T): T {
    return { ...this.data, ...data };
  }

  public makeMany<T>(length: number = 1, data?: T): Array<T> {
    const manyData = [];

    for (let index = length; index > 0; index--) {
      manyData.push({ ...this.data, ...data });
    }

    return manyData;
  }

  public async create(data?: any) {
    const repository = getRepository(this.model);

    const entity = repository.create({ ...this.data, ...data });

    return await repository.save(entity);
  }

  public async createMany(length: number = 1, data?: any) {
    const repository = getRepository(this.model);

    const manyData = [];

    for (let index = length; index > 0; index--) {
      const entity = repository.create({ ...this.data, ...data });

      const newEntity = await repository.save(entity);

      manyData.push(newEntity);
    }

    return manyData;
  }
}
