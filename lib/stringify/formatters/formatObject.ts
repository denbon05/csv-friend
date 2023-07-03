import { IOptions } from '../../types/stringify';

export default (
  data: Record<string, any>,
  { delimiter, headers }: IOptions,
): string => {
  const keys = Object.keys(data);
  const values = Object.values(data).map((value) => {
    if (!value) {
      return null;
    }
    return typeof value === 'string' ? value : JSON.stringify(value);
  });

  return headers
    ? [keys.join(delimiter), values.join(delimiter)].join('\n')
    : values.join(delimiter);
};
