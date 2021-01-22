import faker from 'faker';

export class Factory {
  protected faker;
  public _data: any;

  public constructor () {
    this.faker = faker;
  }

  get data () {
    return this._data;
  }

  public make (data?: any) {
    return { ...this.data, ...data };
  }

  public makeMany (length: number = 1, data?: any) {
    const manyData = [];

    for (let index = length; index > 0; index--) {
      manyData.push({ ...this.data, ...data });
    }

    return manyData;
  }

  public create () {}

  public createMany (length: number = 1) {}
}
