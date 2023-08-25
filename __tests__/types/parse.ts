import { ParseOptions } from 'lib/types/parse';

export type ArrayCases = Array<
  [
    string,
    {
      str: string;
      expectedResult: any;
      options?: Partial<ParseOptions>;
    },
  ]
>;
