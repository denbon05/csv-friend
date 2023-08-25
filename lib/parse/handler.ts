import { ParseOptions } from '../types/parse';
import parseToArray from './parsers/parseToArray';
import parseToObject from './parsers/parseToObject';

/**
 * Convert string to JS type.
 * @param {string} data
 * @param {ParseOptions} options
 * @returns {unknown}
 */
export default <T>(data: string, options: ParseOptions): T => {
  // // define what parser will handle the data
  // if (options.rowType === 'array') {
  //   return parseToArray(data, options);
  // }

  // return parseToObject(data, options);
  return parseToArray(data, options);
};
