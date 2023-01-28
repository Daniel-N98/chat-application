import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase";

const UserContext = createContext();

function UserContextProvider(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      setUser(userAuth ? userAuth : null);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
