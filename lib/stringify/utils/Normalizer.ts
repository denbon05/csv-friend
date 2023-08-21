import { IOptions } from '../../types/stringify';

class Normalizer {
  private delimiter: string;
  private isEmptyIfNullable: boolean;

  constructor({
    delimiter,
    isEmptyIfNullable,
  }: Pick<IOptions, 'delimiter' | 'isEmptyIfNullable'>) {
    this.delimiter = delimiter;
    this.isEmptyIfNullable = isEmptyIfNullable;
  }

  normalize = <T>(value: T): string | T | null => {
    if (!value && this.isEmptyIfNullable) {
      return null;
    }

    return typeof value === 'string'
      ? value.includes(this.delimiter)
        ? JSON.stringify(value)
        : value
      : JSON.stringify(value);
  };
}

export default Normalizer;
