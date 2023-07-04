export const normalize = <T>(value: T): string | T | null => {
  if (!value) {
    return null;
  }

  return typeof value === 'string'
    ? value.includes(',')
      ? JSON.stringify(value)
      : value
    : JSON.stringify(value);
};
