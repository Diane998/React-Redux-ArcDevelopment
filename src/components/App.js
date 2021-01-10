import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';

import HeaderContainer from '../containers/HeaderContainer';
import FooterContainer from '../containers/FooterContainer';
import Home from './pages/Home';
import ServicesContainer from '../containers/ServicesContainer';
import Revolution from './pages/Revolution';
import About from './pages/About';
import Contact from './pages/Contact';
import Estimate from './pages/Estimate';
import CustomSoftware from './services/CustomSoftware';
import MobileApps from './services/MobileApps';
import Websites from './services/Websites';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <HeaderContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={ServicesContainer} />
          <Route
            exact
            path="/services/customsoftware"
            component={CustomSoftware}
          />
          <Route exact path="/services/mobileapps" component={MobileApps} />
          <Route exact path="/services/websites" component={Websites} />
          <Route exact path="/revolution" component={Revolution} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/estimate" component={Estimate} />
        </Switch>
        <FooterContainer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
