import { parse } from 'lib/';
import { ArrayCases } from './types/parse';

describe('Parse to array', () => {
  const casesWithResults: ArrayCases = [
    [
      'Default options - simple string',
      {
        str: 'a,b,c,d\n1,"2,3",,4\n5,6,7,8',
        expectedResult: [
          ['a', 'b', 'c', 'd'],
          [1, '2,3', null, 4],
          [5, 6, 7, 8],
        ],
      },
    ],
  ];

  test.each(casesWithResults)(
    '%s',
    (_testName, { str, expectedResult, options }) => {
      const result = parse(str, options);
      expect(result).toEqual(expectedResult);
    },
  );
});