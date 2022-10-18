import { IPaginationState } from './../../../recoil/pagination/atoms/types';
import { CharactersPage } from "recoil/api/atoms/types";
import axios from "axios";
import { SetterOrUpdater } from "recoil";

export const previousPage = (currentData: CharactersPage | null | undefined, setCurrentData:SetterOrUpdater<CharactersPage | null | undefined> , pagination: IPaginationState, setPagination: SetterOrUpdater<IPaginationState>) => {

  const {currentPage, fivePages} = pagination

  currentData?.info.prev &&
    axios.get(currentData?.info.prev).then((res) => {
      setCurrentData(res.data);

      if (currentPage <= fivePages[0]) {
        const newFivePages = [
          currentPage - 1,
          currentPage,
          currentPage + 1,
          currentPage + 2,
          currentPage + 3,
        ];

        if (currentPage > 0) {
          setPagination({
            ...pagination,
            currentPage: currentPage - 1,
            fivePages: newFivePages,
          });
        }
      } else if (currentPage > 0) {
        if (currentPage > fivePages[4]) {
          const newFivePages = [
            currentPage - 5,
            currentPage - 4,
            currentPage - 3,
            currentPage - 2,
            currentPage - 1,
          ];

          setPagination({
            ...pagination,
            currentPage: currentPage - 1,
            fivePages: newFivePages,
          });
        } else {
          setPagination({
            ...pagination,
            currentPage: currentPage - 1,
          });
        }
      }
    });
};

export const nextPage = (currentData: CharactersPage | null | undefined, setCurrentData:SetterOrUpdater<CharactersPage | null | undefined> , pagination: IPaginationState, setPagination: SetterOrUpdater<IPaginationState>) => {

  const {currentPage, fivePages, totalPages} = pagination

  currentData?.info.next &&
    axios.get(currentData?.info.next).then((res) => {
      setCurrentData(res.data);

      if (currentPage >= fivePages[4]) {
        const newFivePages = [
          currentPage - 3,
          currentPage - 2,
          currentPage - 1,
          currentPage,
          currentPage + 1,
        ];

        if (currentPage < totalPages.length) {
          setPagination({
            ...pagination,
            currentPage: currentPage + 1,
            fivePages: newFivePages,
          });
        }
      } else if (currentPage < totalPages.length) {
        if (currentPage < fivePages[0]) {
          const newFivePages = [
            currentPage + 1,
            currentPage + 2,
            currentPage + 3,
            currentPage + 4,
            currentPage + 5,
          ];

          setPagination({
            ...pagination,
            currentPage: currentPage + 1,
            fivePages: newFivePages,
          });
        } else {
          setPagination({
            ...pagination,
            currentPage: currentPage + 1,
          });
        }
      }
    });
};

export const handleClickPagination = (direction: "left" | "right", currentData: CharactersPage | null | undefined, setCurrentData:SetterOrUpdater<CharactersPage | null | undefined> , pagination: IPaginationState, setPagination: SetterOrUpdater<IPaginationState>) => {



  switch (direction) {
    case "left":
      previousPage(currentData, setCurrentData, pagination, setPagination);
      break;
    case "right":
      nextPage(currentData, setCurrentData, pagination, setPagination);
      break;
  }
};