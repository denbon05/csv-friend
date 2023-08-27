import { ParseReturn, ParseToArrayOpts } from 'lib/types/parse';
// import { hasDelimiterWithinQuotes } from '../utils';

export default (
  str: string,
  { delimiter, headers }: ParseToArrayOpts,
): ParseReturn<'array'> => {
  const lines = str.split('\n');
  // omit headers if needed
  return lines.slice(headers ? 0 : 1).map((line) => {
    // TODO handle cases with quotes
    return line.split(delimiter);
  });
};
