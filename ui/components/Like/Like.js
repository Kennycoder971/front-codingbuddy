import { useState } from "react";
import { IconContext } from "react-icons";
import { MdThumbUpAlt } from "react-icons/md";
import axiosReq from "@/utils/axiosReq";

const Like = ({ user, post }) => {
  const url = `${process.env.API_URL}/posts/${post._id}/likes`;

  // Likes are an array of ids
  const [likes, setLikes] = useState(post?.likes);
  const [userLikedPost, setUserLikedPost] = useState(
    post?.likes.includes(user?._id)
  );

  async function addLikeToPost() {
    if (!userLikedPost) {
      const { error, data } = await axiosReq(url, "post");
      if (error) return console.error("Error", error);
      const likesArray = data.data;
      setLikes(likesArray);
    } else {
      const { error } = await axiosReq(url, "delete");
      if (error) return console.error("Error", error);
      setLikes(likes.filter((id) => id !== user._id));
    }

    setUserLikedPost(!userLikedPost);
  }

  return (
    <li onClick={() => addLikeToPost()}>
      <IconContext.Provider
        value={{
          color: userLikedPost ? "var(--primary-color)" : "inherit",
        }}
      >
        <MdThumbUpAlt />
      </IconContext.Provider>
      <span>{likes.length}</span>
    </li>
  );
};

Like.defaultProps = {};

export default Like;
