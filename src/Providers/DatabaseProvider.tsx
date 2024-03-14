import { createContext, useContext, useEffect, useState } from "react";

import { AuthContext } from "./AuthProvider";
import { Database } from "../lib/firebase";
import { ShortenResponse } from "../lib/api/models/shortener.model";

export type LoadingState = "idle" | "pending" | "failed" | "success";

export const DatabaseContext = createContext({
  loadingState: "idle" as LoadingState,
  histories: [] as ShortenResponse[],
});

export default function DatabaseProvider({
  children,
}: React.PropsWithChildren) {
  const { user, } = useContext(AuthContext);
  const [loadingState, setLoadingState] = useState<LoadingState>("idle");
  const [histories, setHistories] = useState<ShortenResponse[]>([]);

  useEffect(() => {
    if(user === null) return
    setLoadingState("pending");

    return Database.instance.getHistories(user!.uid, (histories) => {
      setLoadingState("success");
      setHistories(histories);
    });
  }, [user]);

  return (
    <DatabaseContext.Provider value={{ histories, loadingState }}>
      {children}
    </DatabaseContext.Provider>
  );
}
