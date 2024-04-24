import React from 'react';
import styles from "./style.module.css";

const List = ({ children }) => {
  return (
    <ul className={styles.listUl}>
      {children}
    </ul>
  );
};


export default List;