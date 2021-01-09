import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Grid, Button, Typography } from '@material-ui/core';
import ButtonArrow from '../ui/ButtonArrow';

import TwoColumnSection from '../section-templates/TwoColumnSection';

import infoBackground from '../../assets/infoBackground.svg';

const useStyles = makeStyles(theme => ({
  learnServices: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    margin: '0.5em 0em 1em 0em'
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  }
}));

const InfoSection = ({ setTabIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const col1 = () => (
    <Grid
      item
      sm
      style={{
        marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em',
        textAlign: matchesXS ? 'center' : 'left'
      }}
    >
      <Grid container direction="column">
        <Typography variant="h2" style={{ color: 'white' }}>
          About Us
        </Typography>
        <Typography variant="subtitle2">Let's get personal.</Typography>
        <Grid item>
          <Button
            onClick={() => setTabIndex(3)}
            component={Link}
            to="/about"
            style={{ color: 'white', borderColor: 'white' }}
            className={classes.learnServices}
            variant="outlined"
          >
            <span style={{ marginRight: 5 }}>Learn More</span>
            <ButtonArrow width={10} height={10} fill="white" />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );

  const col2 = () => (
    <Grid
      item
      sm
      style={{
        marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em',
        textAlign: matchesXS ? 'center' : 'right'
      }}
    >
      <Grid container direction="column">
        <Typography variant="h2" style={{ color: 'white' }}>
          Contact Us
        </Typography>
        <Typography variant="subtitle2">Say hello!</Typography>
        <Grid item>
          <Button
            onClick={() => setTabIndex(4)}
            component={Link}
            to="/contact"
            style={{ color: 'white', borderColor: 'white' }}
            className={classes.learnServices}
            variant="outlined"
          >
            <span style={{ marginRight: 5 }}>Learn More</span>
            <ButtonArrow width={10} height={10} fill="white" />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Grid item>
      <Grid
        container
        style={{ height: '80em' }}
        alignItems="center"
        direction="row"
        className={classes.infoBackground}
      >
        <TwoColumnSection
          col1={col1}
          col2={col2}
          item
          container
          style={{
            width: '100%',
            position: 'absolute',
            textAlign: matchesXS ? 'center' : undefined
          }}
          direction={matchesXS ? 'column' : 'row'}
        />
      </Grid>
    </Grid>
  );
};

export default InfoSection;
