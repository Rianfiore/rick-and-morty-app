export interface ISearchBar {
  onChange?: (event : React.ChangeEvent<HTMLInputElement>) => void
  onSearch?: (word: string) => void
}