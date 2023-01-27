import { registerUser } from "../../firebase/auth.js";

export default function Register() {
  const handleClick = (e) => {
    e.preventDefault();
    const formElements = document.getElementById("register-page-form").elements;
    if (
      registerUser(
        formElements[0].value,
        formElements[1].value,
        formElements[2].value
      )
    ) {
      window.location.href = "/";
    }
  };

  return (
    <section id="register-page">
      <form id="register-page-form">
        <h3>Register</h3>
        <label htmlFor="email">
          Email
          <input type="email" />
        </label>
        <label htmlFor="username">
          Username
          <input type="text" />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" autoComplete="off" />
        </label>
        <button type="submit" onClick={(e) => handleClick(e)}>
          Register
        </button>
      </form>
    </section>
  );
}
