import parseHandler from './parse/handler';
import stringifyHandler from './stringify/handler';
import type {
  ParseDistinctOpts,
  ParseOptions,
  ParseReturn,
} from './types/parse';
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

export const parse = <Opts extends ParseDistinctOpts>(
  data: string,
  customOptions: Opts,
): ParseReturn<Opts['rowType']> => {
  const options: ParseOptions = {
    ...parseDefaultOpts,
    ...customOptions,
  };

  return parseHandler(data, options) as any;
};
