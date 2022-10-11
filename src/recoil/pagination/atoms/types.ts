export interface IPaginationState {
  totalPages: number[] | null[]
  currentPage: number
  currentSearch: string | null
  fivePages: number[]
}