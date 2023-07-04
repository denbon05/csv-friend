# CSV manager

[![Maintainability](https://api.codeclimate.com/v1/badges/7e23c145a9b179833d5a/maintainability)](https://codeclimate.com/github/denbon05/csv-homie/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7e23c145a9b179833d5a/test_coverage)](https://codeclimate.com/github/denbon05/csv-homie/test_coverage)

Friendly manager for CSV.

## Example

```ts
import { stringify } from 'csv-homie';

const dataArray = [
  ['a', 'b', 'c', 'd'],
  [1, 2, null, 4],
  [5, 6, 7, 8],
];
// with default options - 2th parameter
stringify(dataArray);
// 'a,b,c,d\n1,2,,4\n5,6,7,8'

const dataCollection = [
  { a: 'b', c: 'd' },
  { a: 'f', c: 'x' },
];
// custom options - 2th parameter
stringify(dataCollection, {
  headers: false,
  delimiter: '|',
});
// 'b|d\nf|x'
```

## API

2th parameter, <b>default</b> values commented.

```ts
interface IOptions {
  headers: boolean; // true
  delimiter: string; // ','
}
```

## Dev

```bash
npm ci
npm test
```
