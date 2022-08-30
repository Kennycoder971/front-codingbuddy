import Publication from "@/ui/components/Publication/Publication";
import { useContext } from "react";
import AuthContext from "@/store/auth";

export default function Me(loaded) {
  const { user } = useContext(AuthContext);
  console.log(user);
  return <main>{loaded ? <Publication user={user} /> : <p>loading</p>}</main>;
}

export async function getStaticProps(context) {
  return {
    props: {
      revalidate: 10,
    },
  };
}
