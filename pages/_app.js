import "../styles/globals.css";
import Navbar from "@/ui/components/Navbar/Navbar";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const dontWantNav = (pathname) => {
    pathname = pathname.replace("/", "");
    return ["login", "sign-in"].includes(pathname);
  };

  return (
    <>
      {dontWantNav(router.pathname) ? "" : <Navbar />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
