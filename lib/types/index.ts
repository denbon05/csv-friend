export interface IOptions {
  /**
   * Should headers be attached.
   * @default true
   * */
  headers: boolean;
  /** @default , */
  delimiter: string;
  /** @default true */
  isEmptyIfNullable: boolean;
}

export type CSVHomieOpts = Partial<IOptions>;
