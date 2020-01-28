

export const DATA_STATUSES:{[key: string]:dataStat} = {
  UN_TOUCHED: 'UN_TOUCHED',
  REQUESTING: 'REQUESTING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
}

export type dataStat = 'UN_TOUCHED' | 'REQUESTING' | 'SUCCESS' | 'ERROR'
