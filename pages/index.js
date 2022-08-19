import Navbar from "@/ui/components/Navbar/Navbar";
import UserProfile from "@/ui/components/UserProfile/UserProfile";
import PostsGrid from "@/ui/components/PostsGrid/PostsGrid";

export default function Home() {
  return (
    <>
      <Navbar />
      <UserProfile />
      <PostsGrid />
    </>
  );
}
