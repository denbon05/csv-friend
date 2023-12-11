export interface IOptions {
  headers: boolean;
  delimiter: string;
  isEmptyIfNullable: boolean;
}

export type CSVHomieOpts = Partial<IOptions>;
