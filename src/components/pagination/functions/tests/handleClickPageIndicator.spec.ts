import { useRecoilState } from 'recoil';
import { paginationState } from './../../../../recoil/pagination/atoms/index';
import { useRecoilValue } from 'recoil';
import { handleClickPageIndicator } from '../handleClickPageIndicator';


const useSetPagination = () => {
  const [, setPagination] = useRecoilState(paginationState)

  return setPagination
}

describe("When click on Page Indicator", () => {
  it("should call handle function", () => {
    const pagination = {
      totalPages: Array(0).fill(null),
      currentPage: 1,
      currentSearch: null,
      fivePages: [1,2,3,4,5]
    }

    handleClickPageIndicator('left', pagination, useSetPagination)

    expect(handleClickPageIndicator('left', pagination, useSetPagination)).toBeCalled()



  });
});
