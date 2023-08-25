import { CommonOptions } from './common';

export type StringifyOptions = CommonOptions & {
  isEmptyIfNullable: boolean;
};
