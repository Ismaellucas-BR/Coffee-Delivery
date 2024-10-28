import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./src/pages/home/Home";
import Header from "./src/components/Header";
function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;
