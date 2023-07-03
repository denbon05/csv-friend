import { stringify } from 'lib/';

describe('Stringify array', () => {
  const casesWithResult: Array<[string, Record<string, any>]> = [
    [
      'Default options - numbers',
      {
        data: [
          ['a', 'b', 'c', 'd'],
          [1, 2, null, 4],
          [5, 6, 7, 8],
        ],
        expectedResult: 'a,b,c,d\n1,2,,4\n5,6,7,8',
      },
    ],
    [
      'Default options - collection',
      {
        data: [
          { name: 'bob', age: 32 },
          { name: 'alice', age: 21 },
          { name: 'aldo', children: ['bob', 'alice'] },
        ],
        expectedResult: `name,age,children\nbob,32,\nalice,21,\naldo,,["bob","alice"]`,
      },
    ],
    [
      'Custom options',
      {
        data: [
          { a: 'b', c: 'd' },
          { a: 'f', c: 'x' },
        ],
        options: {
          headers: false,
          delimiter: '|',
        },
        expectedResult: 'b|d\nf|x',
      },
    ],
  ];

  test.each(casesWithResult)(
    '%s',
    (_testName, { data, expectedResult, options }) => {
      const result = stringify(data, options);
      expect(result).toEqual(expectedResult);
    },
  );
});

describe('Stringify object', () => {
  const casesWithResult: Array<[string, Record<string, any>]> = [
    [
      'Default options',
      {
        data: { name: 'bob', age: 32, children: ['alice', 'aldo'] },
        expectedResult: 'name,age,children\nbob,32,["alice","aldo"]',
      },
    ],
    [
      'Custom options',
      {
        data: { name: 'bob', age: 32, children: ['alice', 'aldo'] },
        options: {
          headers: false,
          delimiter: '|',
        },
        expectedResult: 'bob|32|["alice","aldo"]',
      },
    ],
  ];

  test.each(casesWithResult)(
    '%s',
    (_testName, { data, expectedResult, options }) => {
      const result = stringify(data, options);
      expect(result).toEqual(expectedResult);
    },
  );
});
