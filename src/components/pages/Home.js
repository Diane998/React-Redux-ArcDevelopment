import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import HeroSectionContainer from '../../containers/HeroSectionContainer';
import ServicesSectionContainer from '../../containers/ServicesSectionContainer';
import RevolutionSectionContainer from '../../containers/RevolutionSectionContainer';
import InfoSectionContainer from '../../containers/InfoSectionContainer';
import CallToActionSectionContainer from '../../containers/CallToActionSectionContainer';

const useStyles = makeStyles(theme => ({
  mainContainer: { marginTop: '5em', width: '100%' },
  learnButtom: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145
  },
  subtitle: {
    marginBottom: '1em'
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.mainContainer} container direction="column">
      <HeroSectionContainer />
      <ServicesSectionContainer />
      <RevolutionSectionContainer />
      <InfoSectionContainer />
      <CallToActionSectionContainer />
    </Grid>
  );
};

export default Home;
