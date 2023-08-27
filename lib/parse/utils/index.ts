import { ParseOptions } from 'lib/types/parse';

export const hasDelimiterWithinQuotes = (
  input: string,
  delimiter: ParseOptions['delimiter'],
): boolean => {
  const quotesRegex = new RegExp(
    `("\\${delimiter}+"|'\\${delimiter}+'|\`\\${delimiter}+\`)`,
  );
  return quotesRegex.test(input);
};
