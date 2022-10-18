import { SetterOrUpdater } from "recoil";
import { IPaginationState } from "recoil/pagination/atoms/types";

export const previousPage = (pagination : IPaginationState, setPagination: SetterOrUpdater<IPaginationState>) => {
  const { fivePages } = pagination;

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

export const nextPage = (pagination : IPaginationState, setPagination: SetterOrUpdater<IPaginationState>) => {
  const { fivePages, totalPages } = pagination;

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


export const handleClickPageIndicator = (direction: "left" | "right", pagination : IPaginationState, setPagination: SetterOrUpdater<IPaginationState>) => {



  switch (direction) {
    case "left":
      previousPage(pagination, setPagination);
      break;
    case "right":
      nextPage(pagination, setPagination);
      break;
  }
};