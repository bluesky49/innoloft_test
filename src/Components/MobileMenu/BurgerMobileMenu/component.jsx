import React, {useState} from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";
import { routes } from "../../routes";

export default ({ close }) => {
  
  return (
    <nav className={styles.navmobile}>
      <li>
        <Link to={routes.home} onClick={close}>
          Home
        </Link>
      </li>
      <li>
        <Link to={routes.account} onClick={close}>
          My Account
        </Link>
      </li>
      <li>
        <Link to={routes.company} onClick={close}>
          My Company
        </Link>
      </li>
      <li>
        <Link to={routes.settings} onClick={close}>
          My Settings
        </Link>
      </li>
      <li>
        <Link to={routes.news} onClick={close}>
          News
        </Link>
      </li>
      <li>
        <Link to={routes.analytics} onClick={close}>
          Analytics
        </Link>
      </li>
    </nav>
  );
};
