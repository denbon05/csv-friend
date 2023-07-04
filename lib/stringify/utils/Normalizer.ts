import { IOptions } from '../../types/stringify';

class Normalizer {
  private delimiter: string;

  constructor({ delimiter }: Pick<IOptions, 'delimiter'>) {
    this.delimiter = delimiter;
  }

  normalize = <T>(value: T): string | T | null => {
    if (!value) {
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
