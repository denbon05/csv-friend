import { ParseReturn, ParseToObjectOpts } from 'lib/types/parse';

export default (
  str: string,
  { delimiter, headers }: ParseToObjectOpts,
): ParseReturn<'object'> => {
  // extract all headers
  return [{ key: 'TODO' }];
};
