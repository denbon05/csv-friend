import { chain, zip } from 'lodash';
import { IOptions } from '../../types/stringify';
import { normalize } from '../utils';

export default (
  items: Array<any>,
  { delimiter, headers }: IOptions,
): string => {
  // figure out the type of the array items
  const [firstRow] = items;
  if (Array.isArray(firstRow)) {
    return (
      items
        .flatMap((row: Array<any>) => row.map(normalize).join(delimiter))
        // remove headers if NOT included
        .slice(headers ? 0 : 1)
        .join('\n')
    );
  }

  // it is a collection
  // define all the columns in the original order
  const columnKeysSet = items.reduce<Set<string>>((acc, obj) => {
    const newKeys = Object.keys(obj).filter((key) => !acc.has(key));
    for (const key of newKeys) {
      acc.add(key);
    }
    return acc;
  }, new Set(Object.keys(firstRow)));

  // convert the collection to array
  const columnKeys = [...columnKeysSet];
  const columns = chain(columnKeys)
    .map((key) => {
      const column = items.map((item: Record<string, any>) => {
        const value = item[key];
        if (!value) {
          return null;
        }

        return normalize(value);
      });
      return column;
    })
    .value();

  const rows = zip(...columns)
    .map((row) => row.join(delimiter))
    .join('\n');

  return headers ? [columnKeys, rows].join('\n') : rows;
};
