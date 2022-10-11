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

const PageIndicator = () => {
  const [, setCurrentData] = useRecoilState(pageState);
  const [, setPagination] = useRecoilState(paginationState);
  const pagination = useRecoilValue(paginationState);
  const { totalPages, currentPage, currentSearch, fivePages } = pagination;

  return (
    <S.Pagination>
      {totalPages.length > 5 ? (
        <div className="pagination__footer__page-indicator">
          <div className="button__page-indicator--left">
            <Button
              disabled={fivePages[0] === 1}
              type="button"
              icon="/images/arrow.png"
              iconSize={20}
              orientation="left"
              onClick={() => {
                if (fivePages[0] === 1) return;

                const newFivePages = [
                  fivePages[0] - 1,
                  fivePages[0],
                  fivePages[1],
                  fivePages[2],
                  fivePages[3],
                ];

                setPagination({ ...pagination, fivePages: newFivePages });
              }}
            />
          </div>
          {fivePages && (
            <>
              <div className="pagination__footer__page-indicator__page-group">
                {fivePages[0] !== 1 && (
                  <div className="pagination__footer__page-indicator__page-group__truncated-page">
                    <div className="pagination__footer__page-indicator__page-group__truncated-page__button-left">
                      <Button
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
              disabled={fivePages[4] === totalPages.length}
              type="button"
              icon="/images/arrow.png"
              iconSize={20}
              onClick={() => {
                if (fivePages[4] === totalPages.length) return;

                const newFivePages = [
                  fivePages[1],
                  fivePages[2],
                  fivePages[3],
                  fivePages[4],
                  fivePages[4] + 1,
                ];

                setPagination({ ...pagination, fivePages: newFivePages });
              }}
            />
          </div>
        </div>
      ) : (
        <div className="pagination__footer__page-indicator">
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
        <div className="pagination">
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
                  .catch(() => setCurrentData(undefined));
              }}
              onChange={(e) => {
                axios
                  .get(
                    `https://rickandmortyapi.com/api/character/?name=${e.target.value}`
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
                      currentSearch: e.target.value,
                    });
                  })
                  .catch(() => {
                    const totalPagesArray = new Array(0).fill(null);
                    setCurrentData(undefined);
                    setPagination({
                      ...pagination,
                      totalPages: totalPagesArray,
                      currentPage: 1,
                      currentSearch: e.target.value,
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
                    icon="/images/arrow.png"
                    iconSize={50}
                    orientation="left"
                    onClick={() =>
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
                      })
                    }
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
                    icon="/images/arrow.png"
                    orientation="right"
                    iconSize={50}
                    onClick={() =>
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
                      })
                    }
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
