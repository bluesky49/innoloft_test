import React from 'react';
import Header from './Components/header';
import Router from './Components/Router'
import './common.styles.module.scss';
import Content from './Components/Content';

function App() {
  return (
    <>
      <Header />
      <Content />
      <Router />
    </>
  );
}

export default App;
