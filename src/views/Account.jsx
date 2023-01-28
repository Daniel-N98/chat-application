import { useContext } from "react";
import { Register, Signin } from "../components/auth";
import { UserContext } from "../contexts/UserContext";

export default function Account() {
  const { user } = useContext(UserContext);

  return (
    <section id="account-view">
      <h1>Account page</h1>
      {user ? (
        <section id="account">
          <p>Username: {user.displayName}</p>
        </section>
      ) : (
        <section id="register-sign-in">
          <Register />
          <Signin />
        </section>
      )}
    </section>
  );
}
