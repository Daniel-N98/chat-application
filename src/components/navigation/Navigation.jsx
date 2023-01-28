import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./navigation.style.css";

export default function Navigation() {
  const { user } = useContext(UserContext);
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/chat">Chat</Link>
      <Link to="/account">{user ? "Account" : "Register/Sign In"}</Link>
    </nav>
  );
}
