import React, { useState } from "react";
import { ReactComponent as LeftArrow } from "../../../assets/icons/icon-swiper-1.svg";
import { ReactComponent as RightArrow } from "../../../assets/icons/icon-swiper-2.svg";
import * as S from "./paginationBtnStyle";

type PageBtnProps = {
  totalPage: number;
  getPageCount: (currentPage: number) => void;
};

function PaginationBtn({ totalPage, getPageCount }: PageBtnProps) {
  const [onPage, setOnPage] = useState(1);
  const handlePageBtn = (index: number) => {
    setOnPage(index);
    getPageCount(index);
  };

  const onLeftArrow = onPage !== 1;
  const onRightArrow = totalPage !== onPage;

  return (
    <S.pageList>
      <S.ArrowBtn onClick={() => handlePageBtn(onPage - 1)} disabled={!onLeftArrow}>
        <LeftArrow stroke={onLeftArrow ? "#767676" : "#F2F2F2"} />
      </S.ArrowBtn>
      {Array.from({ length: totalPage }).map((_, index) => (
        <S.pageItem
          key={index}
          onClick={() => handlePageBtn(index + 1)}
          on={onPage === index + 1 ? "true" : "false"}
        >
          {index + 1}
        </S.pageItem>
      ))}
      <S.ArrowBtn onClick={() => handlePageBtn(onPage + 1)} disabled={!onRightArrow}>
        <RightArrow stroke={onRightArrow ? "#767676" : "#F2F2F2"} />
      </S.ArrowBtn>
    </S.pageList>
  );
}

export default PaginationBtn;
