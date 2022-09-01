import Publication from "@/ui/components/Publication/Publication";
import { useContext } from "react";
import AuthContext from "@/store/auth";

export default function Me() {
  const { user } = useContext(AuthContext);

  return <main>{<Publication user={user} />}</main>;
}

export async function getStaticProps(context) {
  return {
    props: {
      revalidate: 10,
    },
  };
}
