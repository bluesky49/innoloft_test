import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home';
import ProfileEditor from './ProfileEditor';

import Sidebar from './Sidebar';
import styles from './styles.module.scss';
const Content = () => {
  return (
    <div className={styles.contentWrapper}>
      <BrowserRouter>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={ProfileEditor} />
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Content
