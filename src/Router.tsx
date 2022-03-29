import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from "./Routes/chart";
import Coin from "./Routes/Coin";
import Coins from "./Routes/Coins";
import Price from "./Routes/price";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Coins />} />
          <Route path=":coinId" element={<Coin />}>
            <Route path="price" element={<Price />} />
            <Route path="chart" element={<Chart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
