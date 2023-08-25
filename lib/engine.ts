import parseHandler from './parse/handler';
import stringifyHandler from './stringify/handler';
import type { ParseOptions, ParseReturn } from './types/parse';
import type { StringifyOptions } from './types/stringify';

// Stringify
const stringifyDefaultOpts: StringifyOptions = {
  delimiter: ',',
  headers: true,
  isEmptyIfNullable: true,
};

export const stringify = <T>(
  data: T,
  customOptions: Partial<StringifyOptions> = {},
): string => {
  const options = {
    ...stringifyDefaultOpts,
    ...customOptions,
  };

  return stringifyHandler(data, options);
};

// Parse
const parseDefaultOpts: ParseOptions = {
  delimiter: ',',
  headers: true,
  rowType: 'array',
};

export const parse = <T extends ParseOptions['rowType']>(
  data: string,
  customOptions: Partial<ParseOptions> = {},
): ParseReturn<T> => {
  const options = {
    ...parseDefaultOpts,
    ...customOptions,
  };

  return parseHandler(data, options);
};
