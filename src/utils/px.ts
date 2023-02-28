type TPxToNumber = (size: string | number) => number

export const pxToNumber: TPxToNumber = value =>
  typeof value === 'string' ? Number(value.split('p')[0]) : value
