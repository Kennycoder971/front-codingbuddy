import UserProfile from "@/ui/components/UserProfile/UserProfile";
import PostsGrid from "@/ui/components/PostsGrid/PostsGrid";
import { useContext } from "react";
import AuthContext from "@/store/auth";

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <UserProfile user={user} />
      <PostsGrid user={user} />
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      revalidate: 10,
    },
  };
}
