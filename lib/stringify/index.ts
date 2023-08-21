import type { IOptions } from '../types/stringify';
import handle from './handler';

const defaultOptions: IOptions = {
  delimiter: ',',
  headers: true,
  isEmptyIfNullable: true,
};

/**
 * Convert data to CSV string.
 * @param {unknown} data
 * @param {IOptions} options
 * @returns {string}
 */
export default <T>(data: T, customOptions: Partial<IOptions> = {}): string => {
  const options = {
    ...defaultOptions,
    ...customOptions,
  };

  return handle(data, options);
};
