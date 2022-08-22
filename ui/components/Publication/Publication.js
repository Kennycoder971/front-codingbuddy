import React from "react";
import styles from "./Publication.module.scss";
import Post from "../Post/Post";
import { BsCardImage } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import Button from "../Button/Button";

const Publication = () => (
  <div className={styles.container}>
    <div className={styles.Publication}>
      <form action="/">
        <div className={styles.inputContainer}>
          <textarea placeholder="Quoi de neuf ?"></textarea>
        </div>
      </form>
      <div className={styles.bottom}>
        <div className={styles.addImage}>
          <IconContext.Provider value={{ size: "1.5em" }}>
            <BsCardImage />
          </IconContext.Provider>
        </div>

        <Button>Ajouter</Button>
      </div>
    </div>

    <div className={styles.postContainer}>
      <Post />
    </div>
  </div>
);

Publication.defaultProps = {};

export default Publication;
