import { IOptions } from '../../types/stringify';
import Normalizer from '../utils/Normalizer';

export default (
  data: Record<string, any>,
  { delimiter, headers, isEmptyIfNullable }: IOptions,
): string => {
  const { normalize } = new Normalizer({ delimiter, isEmptyIfNullable });
  const keys = Object.keys(data);
  const values = Object.values(data).map((value) => normalize(value));

  return headers
    ? [keys.join(delimiter), values.join(delimiter)].join('\n')
    : values.join(delimiter);
};
