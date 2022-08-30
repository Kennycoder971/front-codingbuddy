import { useEffect, useState } from "react";
import styles from "./Publication.module.scss";
import Post from "../Post/Post";
import { BsCardImage } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import Button from "../Button/Button";
import axiosReq from "@/utils/axiosReq";

const Publication = ({ user }) => {
  const [posts, setPosts] = useState(null);
  const [fields, setFields] = useState({
    text: "",
    profilePicture: "",
  });

  function setField(fieldName, value) {
    setFields((prevState) => ({ ...prevState, [fieldName]: value }));
  }
  function renderPosts(posts) {
    return posts?.map((post) => {
      return <Post user={user} key={post?._id} post={post} />;
    });
  }

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
  }, [posts]);

  async function publishPost(fields) {
    const url = `${process.env.API_URL}/posts`;
    try {
      const { data } = await axiosReq(url, "post", fields);
      setPosts((prevState) => [...prevState, data.data]);
      setFields((prevState) => ({ ...prevState, text: "" }));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.Publication}>
        <form
          action="/"
          onSubmit={(e) => {
            e.preventDefault();
            publishPost(fields);
          }}
        >
          <div className={styles.inputContainer}>
            <textarea
              value={fields.text}
              onChange={(e) => setField("text", e.target.value)}
              placeholder={`Quoi de neuf ? ${user?.username || ""}`}
            ></textarea>
          </div>
          <div className={styles.bottom}>
            <div className={styles.addImage}>
              <IconContext.Provider value={{ size: "1.5em" }}>
                <BsCardImage />
              </IconContext.Provider>
            </div>

            <Button>Ajouter</Button>
          </div>
        </form>
      </div>
      <div className={styles.postContainer}>
        {posts ? renderPosts(posts) : <p>Pas encore de posts</p>}
      </div>
    </div>
  );
};

Publication.defaultProps = {};

export default Publication;
