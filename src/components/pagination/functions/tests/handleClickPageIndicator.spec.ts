import { RecoilRoot } from 'recoil';
import { useRecoilState, useRecoilValue } from 'recoil';
import { paginationState } from './../../../../recoil/pagination/atoms/index';
import { handleClickPageIndicator, previousPage } from '../handleClickPageIndicator';
import { renderHook } from '@testing-library/react';


const useSetPagination = () => {
  const [pagination, setPagination] = useRecoilState(paginationState)

  return {pagination, setPagination}
}

describe("When click on Page Indicator", () => {
  it("should call setState on function", () => {
    const {result} = renderHook(() => useSetPagination(), {
      wrapper: RecoilRoot,
    })
    const setPaginationState = result.current.setPagination
    const paginationState = result.current.pagination

    const pagination = {
      totalPages: Array(0).fill(null),
      currentPage: 1,
      currentSearch: null,
      fivePages: [1,2,3,4,5]
    }

    const {fivePages} = pagination

    const mockPageIndicator = jest.fn(() => handleClickPageIndicator('right', pagination, setPaginationState))

    mockPageIndicator()
    expect(mockPageIndicator).toBeCalledTimes(1)
    
    const mockPreviousPage = jest.fn(() => previousPage(pagination, setPaginationState))

    mockPreviousPage()
    expect(mockPreviousPage).toBeCalledTimes(1)

    const newFivePages = [
      fivePages[0] - 1,
      fivePages[0],
      fivePages[1],
      fivePages[2],
      fivePages[3],
    ];

    const mockSetPagination = jest.fn(() => setPaginationState({...paginationState, fivePages: newFivePages}))

    expect(paginationState).toStrictEqual(pagination)
    mockSetPagination()
    expect(mockSetPagination).toHaveBeenCalledTimes(1)
  });
});
