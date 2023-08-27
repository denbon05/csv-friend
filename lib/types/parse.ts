import { CommonOptions } from './common';

type TArray = 'array';
type TObject = 'object';

export type ParseOptions = CommonOptions & {
  rowType: TArray | TObject;
};

export type ParseReturn<Row extends ParseOptions['rowType']> =
  Row extends TArray ? Array<Array<any>> : Array<Record<string, any>>;

export type ParseDistinctOpts = Pick<ParseOptions, 'rowType'> &
  Partial<ParseOptions>;

export type ParseToObjectOpts = Omit<ParseOptions, 'rowType'>;

export type ParseToArrayOpts = Omit<ParseOptions, 'rowType'>;
