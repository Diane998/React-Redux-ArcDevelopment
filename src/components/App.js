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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/services" component={ServicesPage} />
          <Route exact path="/revolution" component={RevolutionPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/estimate" component={EstimatePage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
