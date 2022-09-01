import { useState, useEffect } from "react";
import axiosReq from "@/utils/axiosReq";

function useLoadPosts(user) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const url = `${process.env.API_URL}/users/${user?._id}/posts`;
        const { data } = await axiosReq(url, "get");
        setPosts(data.data);
      } catch (error) {
        setPosts(null);
      }
    })();
  }, []);

  return posts;
}

export default useLoadPosts;
