"use client";

import { MarsPhoto } from "@/types";
import MarsImage from "./MarsImage";
import { useEffect, useMemo, useState } from "react";
import ReactInputDateMask from "react-input-date-mask";
import { MARS_PHOTOS_BASE_URL, PAGES_MAX_DEFAULT } from "@/utils/constants";
import { CiSearch } from "react-icons/ci";
import NoDataAlert from "./NoDataAlert";
import ErrorAlert from "./ErrorAlert";
import Loading from "./Loading";
import { parseDateInput, sequantialNumbers } from "@/utils";
import useAppState from "@/hooks/useAppState";
import PagesList from "./PagesList";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const MarsImages: React.FC = () => {
  const {
    marsImageDate,
    marsImageSearchDate,
    marsImagePage,
    setMarsImageDate,
  } = useAppState();
  const [selectedDate, setSelectedDate] = useState(marsImageDate);
  const [searchDate, setSearchDate] = useState(marsImageSearchDate);
  const [dataLoading, setDataLoading] = useState(false);
  const [resultDataSet, setResultDataSet] = useState<Array<MarsPhoto>>();
  const [noData, setNoData] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<boolean>(false);

  const handleOnSearchDateChange = (value: any) => {
    setSearchDate(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      setFetchError(false);
      setNoData(false);
      setDataLoading(true);
      const response = await fetch(
        `${MARS_PHOTOS_BASE_URL}?api_key=${
          API_KEY || "DEMO_KEY"
        }&earth_date=${selectedDate}&page=${marsImagePage}`
      );
      const data = await response.json();
      setDataLoading(false);
      const photoData = data.photos as Array<MarsPhoto>;
      if (!photoData || photoData.length === 0) {
        setNoData(true);
      }
      setResultDataSet(photoData);
    };
    const parsedDate = parseDateInput(searchDate);
    if (searchDate && !!parsedDate) {
      fetchData().catch((error: any) => {
        console.log(error);
        setFetchError(true);
        setDataLoading(false);
      });
    }
  }, [selectedDate, marsImagePage]);

  const searhButtonHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const parsedDate = parseDateInput(searchDate);
    if (!!parsedDate) {
      setSelectedDate(parsedDate);
      setMarsImageDate(parsedDate, searchDate);
    } else {
      setFetchError(true);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-4 p-4 mb-5">
      <h2 className="text-2xl font-medium text-black-600">
        Mars Images By Date
      </h2>
      <div className="pt-2 max-w-xs flex flex-nowrap text-sm font-small">
        <label className="mr-4 pt-0.5">Earth date:</label>
        <ReactInputDateMask
          mask="mm/dd/yyyy"
          showMaskOnFocus={true}
          value={searchDate}
          className="w-32 max-w-xs  px-2 py-0.5 rounded-l-lg border border-gray-300"
          onChange={handleOnSearchDateChange}
          onClick={searhButtonHandler}
          showMaskOnHover={true}
        />
        <a
          href=""
          onClick={searhButtonHandler}
          className="mars-search-colors items-center flex flex-nowrap py-0.5 px-2  rounded-r-lg"
        >
          <span>Search</span>
          <CiSearch className="mr-1 ml-1" />
        </a>
      </div>
      {noData && <NoDataAlert />}
      {fetchError && <ErrorAlert />}
      {dataLoading && <Loading />}
      <div className="relative -left-2 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto">
        {resultDataSet &&
          resultDataSet.map((photo: MarsPhoto) => (
            <MarsImage key={photo.id} photo={photo} />
          ))}
      </div>
      {resultDataSet && <PagesList />}
    </div>
  );
};

export default MarsImages;
