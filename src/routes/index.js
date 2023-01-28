import { Route, Routes } from "react-router-dom";
import Account from "../views/Account";
import Home from "../views/Home";

export default function RoutePaths() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </section>
  );
}
