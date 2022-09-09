import PostPage from "@/ui/components/PostPage/PostPage";
import axiosReq from "@/utils/axiosReq";

export default function Post({ post }) {
  return (
    <main>
      <PostPage post={post} />
    </main>
  );
}

export async function getStaticProps({ params: { pid } }) {
  const url = `${process.env.API_URL}/posts/${pid}`;
  const { data } = await axiosReq(url, "get");
  return {
    props: {
      post: data.data,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths(ctx) {
  const url = `${process.env.API_URL}/posts`;
  const { data } = await axiosReq(url, "get");
  const paths = data.data.map((post) => ({ params: { pid: post._id } }));
  return {
    paths,
    fallback: true,
  };
}
