import type {
  ParseOptions,
  ParseReturn,
  ParseToArrayOpts,
  ParseToObjectOpts,
} from '../types/parse';
import parseToArray from './parsers/parseToArray';
import parseToObject from './parsers/parseToObject';

/**
 * Convert string to JS type.
 * @param {string} data
 * @param {ParseOptions} options
 * @returns {unknown}
 */
export default (data: string, { rowType, ...rest }: ParseOptions): unknown => {
  // define what parser will handle the data
  switch (rowType) {
    case 'object':
      return parseToObject(data, rest);
    case 'array':
      return parseToArray(data, rest);
    default:
      throw Error(`Unsupported parser type ${rowType}!`);
  }
};
