/* eslint-disable no-undef */
import Hash from '../../app/services/Hash';
import bcrypt from 'bcrypt';

jest.mock('../../app/services/Hash', () => {
  return {
    Hash: jest.fn().mockImplementation(() => {
      return {
        generate: () => {
          return 'hashedPassword';
        }
      };
    })
  };
});

describe('Testing method generate', () => {
  test('return hashed password', async () => {
    const result = await Hash.generate('123123');

    console.log('result', result);

    expect(result).toEqual('hashedPassword');
  });
});

describe('Testing method compare', () => {
  test('return true when send a same string hashed', async () => {
    const string = '123123';
    const stringHashed = await bcrypt.hash(string, 12);

    const result = await Hash.compare(string, stringHashed);

    expect(result).toBeTruthy();
  });

  test('return false when send any string not hashed', async () => {
    const string = '123123';

    const result = await Hash.compare(string, 'anyStringNotHashed');

    expect(result).toBeFalsy();
  });
});
