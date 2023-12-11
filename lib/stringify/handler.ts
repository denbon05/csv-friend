import { IOptions } from '../types';
import formatArray from './formatters/formatArray';
import formatObject from './formatters/formatObject';

/**
 * Convert array to CSV string.
 */
export default <T>(data: T, options: IOptions): string => {
  // define what formatter will handle the data
  // in js Array is an object type
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
