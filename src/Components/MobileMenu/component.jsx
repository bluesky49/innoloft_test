import React from "react";
import styles from "./styles.module.scss";
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import BurgerMobileMenu from "./BurgerMobileMenu";

const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "80%",
  border: "none"
};

export default () => (
  <div className={styles.wrap}>
    <Popup
      modal
      overlayStyle={{ background: "rgba(0,0,0,0.65)" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={(open) => <BurgerIcon open={open} />}
    >
      {(close) => <BurgerMobileMenu close={close} />}
    </Popup>
  </div>
);
