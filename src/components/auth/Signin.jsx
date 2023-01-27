import { signInUser } from "../../firebase/auth.js";
import { Link } from "react-router-dom";

export default function SignIn() {
  const handleClick = (e) => {
    e.preventDefault();
    const formElements = document.getElementById("sign-in-page-form").elements;
    signInUser(formElements[0].value, formElements[1].value)
      .then(() => {
        window.location.href = "/";
      })
      .catch((error) => {
        alert("Failed to sign in.");
      });
  };

  return (
    <section id="sign-in-page">
      <form id="sign-in-page-form">
        <h3>Sign In</h3>
        <label htmlFor="email">
          Email
          <input type="email" autoComplete="on" />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" autoComplete="on" />
        </label>
        <button type="submit" onClick={(e) => handleClick(e)}>
          Sign in
        </button>
        <Link to="/account/forgot-password" className="nav-link">
          Forgot password?
        </Link>
      </form>
    </section>
  );
}
