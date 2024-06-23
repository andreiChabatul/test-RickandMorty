import type { ICharacter, Status } from '.'

export interface State {
  loading: boolean
  page: number
  results: ICharacter[]
  totalRecords: number
  filterStatus: Status | undefined
  filterName: string | undefined
}
