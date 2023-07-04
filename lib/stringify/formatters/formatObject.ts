import { IOptions } from '../../types/stringify';
import { normalize } from '../utils';

export default (
  data: Record<string, any>,
  { delimiter, headers }: IOptions,
): string => {
  const keys = Object.keys(data);
  const values = Object.values(data).map((value) => {
    if (!value) {
      return null;
    }
    return normalize(value);
  });

  return headers
    ? [keys.join(delimiter), values.join(delimiter)].join('\n')
    : values.join(delimiter);
};
