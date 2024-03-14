import { getAuth, onAuthStateChanged } from "firebase/auth";

import { createContext, useEffect, useState } from "react";

type AuthContextProps = {
  isLoggedIn: boolean;
  user: {
    uid: string;
    email: string | null;
    displayName: string | null;
  } | null;
};

export const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  user: null,
});

export default function AuthProvider({ children }: React.PropsWithChildren) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<AuthContextProps["user"] | null>(null);

  useEffect(() => {
    return onAuthStateChanged(getAuth(), (user) => {
      setIsLoggedIn(!!user);
      if (user)
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
    });
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}