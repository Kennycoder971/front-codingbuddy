import React from "react";
import PropTypes from "prop-types";
import styles from "./Reply.module.scss";
import { SiGooglemessages } from "react-icons/si";

const Reply = ({ post }) => (
  <li>
    <SiGooglemessages />
    <span>{0}</span>
  </li>
);

Reply.propTypes = {};

Reply.defaultProps = {};

export default Reply;
