import { BrowserRouter, Route, Routes } from "react-router";

import { Home } from "@/pages/Home";

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
