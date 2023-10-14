import React from "react";
import * as styles from "./loader.module.scss";

export const Loader = ({size=10}) => {

  return <div style={{height:size , width:size}} className={styles.loader}/>


};
