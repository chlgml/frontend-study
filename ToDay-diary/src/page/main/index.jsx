import React, { createContext, useEffect, useRef, useState } from "react";
import CreateDiary from "./CreateDiary";
import DiaryList from "./DiaryList";
import { getDiary } from "../../api/api";

export const FetchDataContext = createContext();

const Main = () => {
  const [data, setData] = useState({});

  const fetchData = async () => {
    const newData = await getDiary();
    setData(newData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const inputForm = useRef();
  const onMoveToForm = () => {
    inputForm.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <FetchDataContext.Provider value={fetchData}>
      <CreateDiary onMoveToForm={onMoveToForm} />
      <DiaryList inputForm={inputForm} data = {data} />
    </FetchDataContext.Provider>
  );
};

export default Main;
