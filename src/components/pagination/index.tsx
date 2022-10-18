//libs
import axios from "axios";

//Components
import { Card, SearchBar, Button } from "components";

//Style
import * as S from "./styles";

//Hooks
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { pageState } from "recoil/api/atoms";
import { paginationState } from "recoil/pagination/atoms";
import { themeState } from "recoil/theme/atom";
import { handleClickPagination, handleClickPageIndicator } from "./functions";

const PageIndicator = () => {
  const [, setCurrentData] = useRecoilState(pageState);
  const [, setPagination] = useRecoilState(paginationState);
  const pagination = useRecoilValue(paginationState);
  const { totalPages, currentPage, currentSearch, fivePages } = pagination;
  const isDarkTheme = useRecoilValue(themeState);

  return (
    <S.Pagination>
      {totalPages.length > 5 ? (
        <div
          data-testid="page-indicator"
          className="pagination__footer__page-indicator"
        >
          <div className="button__page-indicator--left">
            <Button
              size="small"
              disabled={fivePages[0] === 1}
              type="button"
              icon={`/images/arrow${isDarkTheme ? "-inverse" : ""}.png`}
              iconSize={20}
              orientation="left"
              onClick={() => handleClickPageIndicator("left", pagination, setPagination)}
            />
          </div>
          {fivePages && (
            <>
              <div className="pagination__footer__page-indicator__page-group">
                {fivePages[0] !== 1 && (
                  <div className="pagination__footer__page-indicator__page-group__truncated-page">
                    <div className="pagination__footer__page-indicator__page-group__truncated-page__button-left">
                      <Button
                        size="small"
                        onClick={() => {
                          const searchResult = currentSearch
                            ? `?name=${currentSearch}&`
                            : "?";
                          axios
                            .get(
                              `https://rickandmortyapi.com/api/character${searchResult}page=1`
                            )
                            .then((res) => {
                              setCurrentData(res.data);
                              const totalPagesArray = new Array(
                                res.data.info.pages
                              ).fill(null);

                              const newFivePages = [1, 2, 3, 4, 5];

                              setPagination({
                                ...pagination,
                                currentPage: 1,
                                totalPages: totalPagesArray,
                                fivePages: newFivePages,
                              });
                            });
                        }}
                      >
                        1
                      </Button>
                      <div className="pagination__footer__page-indicator__page-group__truncated-page__button-left__truncated-point"></div>
                      <div className="pagination__footer__page-indicator__page-group__truncated-page__button-left__truncated-point"></div>
                      <div className="pagination__footer__page-indicator__page-group__truncated-page__button-left__truncated-point"></div>
                    </div>
                  </div>
                )}
                {fivePages.map((el, id) => {
                  const page = el;

                  return (
                    <Button
                      size="small"
                      selected={page === currentPage}
                      key={id}
                      onClick={() => {
                        const searchResult = currentSearch
                          ? `?name=${currentSearch}&`
                          : "?";
                        axios
                          .get(
                            `https://rickandmortyapi.com/api/character${searchResult}page=${page}`
                          )
                          .then((res) => {
                            setCurrentData(res.data);
                            const totalPagesArray = new Array(
                              res.data.info.pages
                            ).fill(null);
                            if (page) {
                              setPagination({
                                ...pagination,
                                currentPage: page,
                                totalPages: totalPagesArray,
                              });
                            }
                          });
                      }}
                    >
                      {page}
                    </Button>
                  );
                })}
                {fivePages[fivePages.length - 1] !== totalPages.length && (
                  <div className="pagination__footer__page-indicator__page-group__truncated-page">
                    <div className="pagination__footer__page-indicator__page-group__truncated-page__button-right">
                      <div className="pagination__footer__page-indicator__page-group__truncated-page__button-right__truncated-point"></div>
                      <div className="pagination__footer__page-indicator__page-group__truncated-page__button-right__truncated-point"></div>
                      <div className="pagination__footer__page-indicator__page-group__truncated-page__button-right__truncated-point"></div>

                      <Button
                        size="small"
                        onClick={() => {
                          const searchResult = currentSearch
                            ? `?name=${currentSearch}&`
                            : "?";
                          const lastPage = totalPages.length;

                          axios
                            .get(
                              `https://rickandmortyapi.com/api/character${searchResult}page=${lastPage}`
                            )
                            .then((res) => {
                              setCurrentData(res.data);
                              const totalPagesArray = new Array(
                                res.data.info.pages
                              ).fill(null);

                              const newFivePages = [
                                lastPage - 4,
                                lastPage - 3,
                                lastPage - 2,
                                lastPage - 1,
                                lastPage,
                              ];

                              setPagination({
                                ...pagination,
                                currentPage: lastPage,
                                totalPages: totalPagesArray,
                                fivePages: newFivePages,
                              });
                            });
                        }}
                      >
                        {totalPages.length}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
          <div className="button__page-indicator--right">
            <Button
              size="small"
              disabled={fivePages[4] === totalPages.length}
              type="button"
              icon={`/images/arrow${isDarkTheme ? "-inverse" : ""}.png`}
              iconSize={20}
              onClick={() => handleClickPageIndicator("right", pagination, setPagination)}
            />
          </div>
        </div>
      ) : (
        <div
          data-testid="page-indicator"
          className="pagination__footer__page-indicator"
        >
          {totalPages &&
            totalPages.map((_page, id) => {
              const page = id + 1;
              return (
                <Button
                  selected={page === currentPage}
                  key={id}
                  onClick={() => {
                    const searchResult = currentSearch
                      ? `?name=${currentSearch}&`
                      : "?";
                    axios
                      .get(
                        `https://rickandmortyapi.com/api/character${searchResult}page=${page}`
                      )
                      .then((res) => {
                        setCurrentData(res.data);
                        const totalPagesArray = new Array(
                          res.data.info.pages
                        ).fill(null);
                        setPagination({
                          ...pagination,
                          currentPage: page,
                          totalPages: totalPagesArray,
                        });
                      });
                  }}
                >
                  {page}
                </Button>
              );
            })}
        </div>
      )}
    </S.Pagination>
  );
};

export const Pagination = () => {
  const [, setCurrentData] = useRecoilState(pageState);
  const currentData = useRecoilValue(pageState);
  const [, setPagination] = useRecoilState(paginationState);
  const pagination = useRecoilValue(paginationState);
  const { totalPages, currentPage, fivePages } = pagination;
  const isDarkTheme = useRecoilValue(themeState);

  useEffect(() => {
    if (currentData === null) {
      axios.get("https://rickandmortyapi.com/api/character").then((res) => {
        setCurrentData(res.data);
        const totalPagesArray = new Array(res.data.info.pages).fill(null);

        setPagination({ ...pagination, totalPages: totalPagesArray });
      });
    }
  }, [currentData, setCurrentData, pagination, setPagination]);

  return (
    <>
      <S.Pagination>
        <div data-testid="pagination" className="pagination">
          <div className="pagination__header">
            <SearchBar
              onSearch={(value) => {
                axios
                  .get(
                    `https://rickandmortyapi.com/api/character/?name=${value}`
                  )
                  .then((res) => {
                    const totalPagesArray = new Array(res.data.info.pages).fill(
                      null
                    );

                    setCurrentData(res.data);
                    setPagination({
                      ...pagination,
                      totalPages: totalPagesArray,
                      currentPage: 1,
                      currentSearch: value,
                    });
                  })
                  .catch(() => {
                    setCurrentData(undefined);
                  });
              }}
              onChange={(searchedName) => {
                axios
                  .get(
                    `https://rickandmortyapi.com/api/character/?name=${searchedName}`
                  )
                  .then((res) => {
                    const totalPagesArray = new Array(res.data.info.pages).fill(
                      null
                    );

                    setCurrentData(res.data);
                    setPagination({
                      ...pagination,
                      totalPages: totalPagesArray,
                      currentPage: 1,
                      currentSearch: searchedName,
                    });
                  })
                  .catch(() => {
                    const totalPagesArray = new Array(0).fill(null);
                    setCurrentData(undefined);
                    setPagination({
                      ...pagination,
                      totalPages: totalPagesArray,
                      currentPage: 1,
                      currentSearch: searchedName,
                    });
                  });
              }}
            />
          </div>
          <div className="pagination__content">
            {currentData === undefined ? (
              <>
                <div className="pagination__content__not-found">
                  Nada encontrado...
                </div>
              </>
            ) : (
              currentData && (
                <>
                  <Button
                    disabled={currentPage === 1}
                    type="button"
                    icon={`/images/arrow${isDarkTheme ? "-inverse" : ""}.png`}
                    iconSize={50}
                    orientation="left"
                    onClick={() => handleClickPagination("left", currentData, setCurrentData, pagination, setPagination)}
                  />
                  <div className="pagination__content__cards">
                    {currentData.results &&
                      currentData.results.map((char) => {
                        return (
                          <Card
                            key={char.id}
                            id={char.id}
                            img={char.image}
                            title={char.name}
                          />
                        );
                      })}
                  </div>
                  <Button
                    disabled={currentPage === totalPages.length}
                    type="button"
                    icon={`/images/arrow${isDarkTheme ? "-inverse" : ""}.png`}
                    orientation="right"
                    iconSize={50}
                    onClick={() => handleClickPagination("right", currentData, setCurrentData, pagination, setPagination)}
                  />
                </>
              )
            )}
          </div>
          {totalPages && (
            <div className="pagination__footer">
              <PageIndicator />
            </div>
          )}
        </div>
      </S.Pagination>
    </>
  );
};
