import AuthProvider from "./Providers/AuthProvider";
import DatabaseProvider from "./Providers/DatabaseProvider";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <AuthProvider>
      <DatabaseProvider>{children}</DatabaseProvider>
    </AuthProvider>
  );
}
