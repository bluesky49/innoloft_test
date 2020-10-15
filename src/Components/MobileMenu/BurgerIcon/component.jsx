import React from "react";
import styles from "./styles.module.scss";
import cx from "classnames";

export default ({ open, ...props }) => (
  <div
    className={cx(styles.burgerMenu, open && styles.burgerMenuOpen)}
    {...props}
  >
    <div className={styles.bar1} key="b1" />
    <div className={styles.bar2} key="b2" />
    <div className={styles.bar3} key="b3" />
  </div>
);
