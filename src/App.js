import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css' ;
import { siteMenus } from './config/siteMeta';

import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';


import Header from './components/pages/static/Header';
import Footer from './components/pages/static/Footer';

class App extends Component
{

  render(){
    return (
      <div className="App">
        <Header/>
        <Container text style={{ marginTop: '7em' }}>
          <Route exact path={siteMenus.homepage.path} component={siteMenus.homepage.component}></Route>
          <Route exact path={siteMenus.moviespage.path} component={siteMenus.moviespage.component}></Route>
          <Route exact path={siteMenus.addmoviepage.path} component={siteMenus.addmoviepage.component}></Route>
        </Container>
        <Footer/>        
        
      </div>
    );
  }

}

export default App;