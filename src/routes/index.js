import { Route, Routes } from "react-router-dom";
import Account from "../views/Account";
import Chat from "../views/Chat";
import Home from "../views/Home";

export default function RoutePaths() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </section>
  );
}
