import { CommonOptions } from './common';

export type ParseOptions = CommonOptions & {
  rowType: 'array' | 'object';
};

export type ParseReturn<
  T extends ParseOptions['rowType'],
  Row = any,
> = T extends 'array'
  ? Array<Row>
  : T extends 'object'
  ? Row extends Record<string, any>
    ? Record<string, any>
    : Row
  : never;
