import { StringifyOptions } from '../types/stringify';
import formatArray from './formatters/formatArray';
import formatObject from './formatters/formatObject';

/**
 * Convert data to CSV string.
 * @param {unknown} data
 * @param {StringifyOptions} options
 * @returns {string}
 */
export default <T>(data: T, options: StringifyOptions): string => {
  // define what formatter will handle the data
  if (Array.isArray(data)) {
    return formatArray(data, options);
  }

  // explicity define each supported type
  const dataType = typeof data;
  switch (dataType) {
    case 'string':
      return String(data);
    case 'number':
      return String(data);
    case 'bigint':
      return String(data);
    case 'boolean':
      return String(data);
    case 'symbol':
      return String(data);
    case 'undefined':
      return String(data);
    case 'object':
      return formatObject(data as object, options);
    default:
      throw TypeError(`Unsupported data type "${dataType}"`);
  }
};
