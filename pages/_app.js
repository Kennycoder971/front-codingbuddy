import "../styles/globals.css";
import Navbar from "@/ui/components/Navbar/Navbar";
import { useRouter } from "next/router";
import { UserSettingsContextProvider } from "@/store/user-settings";
import { AuthContextProvider } from "@/store/auth";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const dontWantNav = (pathname) => {
    pathname = pathname.replace("/", "");
    return ["login", "sign-in"].includes(pathname);
  };

  return (
    <AuthContextProvider>
      <UserSettingsContextProvider>
        {dontWantNav(router.pathname) ? "" : <Navbar />}
        <Component {...pageProps} />
      </UserSettingsContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
