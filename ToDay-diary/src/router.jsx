import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./page/main";
import CreateDiary from "./page/main/CreateDiary";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/dd" element={<CreateDiary />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
