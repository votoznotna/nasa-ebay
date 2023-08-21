"use client";

import useAppState from "@/hooks/useAppState";
import { sequantialNumbers } from "@/utils";
import { PAGES_MAX_DEFAULT } from "@/utils/constants";
import { useMemo } from "react";

interface IMarsImageProps {
  onClickHanlder: (index: number) => void;
}

const PagesList: React.FC<IMarsImageProps> = ({ onClickHanlder }) => {
  const { marsImagePage, setMarsImagesPage } = useAppState();
  const pages = useMemo(
    () => sequantialNumbers(PAGES_MAX_DEFAULT),
    [PAGES_MAX_DEFAULT]
  );

  const _onClickHandler = (index: number) => {
    setMarsImagesPage(index);
    onClickHanlder(index);
  };
  return (
    <div className="flex flex-nowrap justify-end">
      {pages.map((page: number, index: number) => (
        <button
          key={index}
          onClick={() => _onClickHandler(index + 1)}
          className={`${
            marsImagePage === index + 1 && "maps-selected-page"
          } cursor-pointer text-sm text-center font-small py-1 p-3 hover:shadow-slate-400 shadow-md rounded-lg border border-slate-400 m-1 transition-shadow duration-200 group`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};
export default PagesList;
