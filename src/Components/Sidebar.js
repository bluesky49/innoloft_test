import React from 'react'
import {
  BrowserRouter as Router,
  NavLink,
} from 'react-router-dom';

import home from '../assets/icons/home.png';
import account from '../assets/icons/account.png';
import analytics from '../assets/icons/analytics.png';
import company from '../assets/icons/company.png';
import news from '../assets/icons/news.png';
import setting from '../assets/icons/setting.png';
import styles from './styles.module.scss';
import {routes} from './routes';

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <ul>
        <li>
          <NavLink to={routes.home}><img src={home} alt="home"/>Home</NavLink>
        </li>
        <li>
          <NavLink to={routes.account}><img src={account} alt="account"/>My Account</NavLink>
        </li>
        <li>
          <NavLink to={routes.company}><img src={company} alt="company"/>My Company</NavLink>
        </li>
        <li>
          <NavLink to={routes.settings}><img src={setting} alt="setting"/>My Settings</NavLink>
        </li>
        <li>
          <NavLink to={routes.news}><img src={news} alt="news"/>News</NavLink>
        </li>
        <li>
          <NavLink to={routes.analytics}><img src={analytics} alt="analytics"/>Analytics</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
