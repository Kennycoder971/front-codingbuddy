import axiosReq from "@/utils/axiosReq";

export async function addLikeToPost(postId) {
  const url = `${process.env.API_URL}/posts/${postId}/likes`;
  try {
    const { data } = await axiosReq(url, "post");
    return data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getPostLikes(postId) {
  const url = `${process.env.API_URL}/posts/${postId}/likes`;
  try {
    const { data } = await axiosReq(url, "get");
    return data.data;
  } catch (error) {
    console.log(error);
    return 0;
  }
}

export async function deletePostLikes(postId) {
  const url = `${process.env.API_URL}/posts/${postId}/likes`;
  try {
    const { data } = await axiosReq(url, "delete");
    return data.data;
  } catch (error) {
    console.log(error);
    return 0;
  }
}
