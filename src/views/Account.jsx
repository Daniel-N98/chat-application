import { useContext } from "react";
import { Register, Signin } from "../components/auth";
import { UserContext } from "../contexts/UserContext";
import { signOutUser } from "../firebase/auth";

export default function Account() {
  const { user } = useContext(UserContext);

  const handleSignOut = () => {
    signOutUser();
  };

  return (
    <section id="account-view">
      <h1>Account page</h1>
      {user ? (
        <section id="account">
          <p>Username: {user.displayName}</p>
          <button onClick={() => handleSignOut()}>Sign out</button>
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
