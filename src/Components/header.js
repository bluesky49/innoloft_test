import React from 'react'

import envelope from '../assets/icons/envelope.png';
import logo from '../assets/icons/logo.png';
import en from '../assets/icons/en.png';
import bell from '../assets/icons/bell.png';
import styles from './styles.module.scss';

const Header = (props) => {
  const {handleToggle, isOpen} = props
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
     </div>
     <div className={styles.setting}>
      <img src={en} alt="en" />
      <img src={envelope} alt="envelope" />
      <img src={bell} alt="bell" />
     </div>
    </div>
  )
}
export default Header;