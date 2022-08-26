import "../styles/globals.css";
import Navbar from "@/ui/components/Navbar/Navbar";
import { useRouter } from "next/router";
import { UserSettingsContextProvider } from "@/store/user-settings";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const dontWantNav = (pathname) => {
    pathname = pathname.replace("/", "");
    return ["login", "sign-in"].includes(pathname);
  };

  return (
    <UserSettingsContextProvider>
      {dontWantNav(router.pathname) ? "" : <Navbar />}
      <Component {...pageProps} />
    </UserSettingsContextProvider>
  );
}

export default MyApp;
