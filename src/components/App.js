import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';

import Header from './header/Header';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import RevolutionPage from './pages/RevolutionPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import EstimatePage from './pages/EstimatePage';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" to={HomePage} />
        <Route exact path="/services" to={ServicesPage} />
        <Route exact path="/revolution" to={RevolutionPage} />
        <Route exact path="/about" to={AboutPage} />
        <Route exact path="/contact" to={ContactPage} />
        <Route exact path="/estimate" to={EstimatePage} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
