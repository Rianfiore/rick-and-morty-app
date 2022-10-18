import { SetterOrUpdater } from "recoil";
import { IPaginationState } from "recoil/pagination/atoms/types";

export const handleClickPageIndicator = (direction: "left" | "right", pagination : IPaginationState, setPagination: SetterOrUpdater<IPaginationState>) => {
  const { totalPages, fivePages } = pagination;

  const previousPage = () => {
    if (fivePages[0] === 1) return;

    const newFivePages = [
      fivePages[0] - 1,
      fivePages[0],
      fivePages[1],
      fivePages[2],
      fivePages[3],
    ];

    setPagination({ ...pagination, fivePages: newFivePages });
  };

  const nextPage = () => {
    if (fivePages[4] === totalPages.length) return;

    const newFivePages = [
      fivePages[1],
      fivePages[2],
      fivePages[3],
      fivePages[4],
      fivePages[4] + 1,
    ];

    setPagination({ ...pagination, fivePages: newFivePages });
  };

  switch (direction) {
    case "left":
      previousPage();
      break;
    case "right":
      nextPage();
      break;
  }
};