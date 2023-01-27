import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";

export default function RoutePaths() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </section>
  );
}
