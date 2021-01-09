import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Grid, Button, Typography } from '@material-ui/core';
import ButtonArrow from '../ui/ButtonArrow';
import TwoColumnSection from '../section-templates/TwoColumnSection';

import animationData from '../../animations/landinganimation/data';

const useStyles = makeStyles(theme => ({
  textContainer: {
    minWidth: '21.5em',
    marginLeft: '5em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    },
    '@media (max-width:360px)': {
      width: '100%'
    }
  },
  h2: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '2em',
      padding: '0 0.5em'
    },
    '@media (max-width:360px)': {
      fontSize: '1.5rem'
    }
  },
  buttonContainer: {
    marginTop: '1em',
    [theme.breakpoints.down('xs')]: {
      margin: '1em 1em',
      width: '90vw'
    },
    '@media (max-width:360px)': {
      justifyContent: 'space-between'
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    },
    '@media (max-width:360px)': {
      margin: '1em 0'
    }
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
    '@media (max-width:360px)': {
      margin: '1em 0'
    }
  },
  animationContainer: {
    maxWidth: '50em',
    minWidth: '21em',
    margin: '2em 0em 0em 10%',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
      maxWidth: '30em'
    }
  }
}));

const HeroSection = ({ setTabIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const col1 = () => (
    <Grid
      style={{
        marginLeft: matchesSM ? 0 : '5em',
        textAlign: matchesSM ? 'center' : ''
      }}
      className={classes.textContainer}
      sm
      item
    >
      <Typography className={classes.h2} variant="h2">
        Bringing West Coast Technology
        <br />
        to the Midwest
      </Typography>
      <Grid container alignItems="center" className={classes.buttonContainer}>
        <Grid item>
          <Button
            onClick={() => setTabIndex(5)}
            component={Link}
            to="/estimate"
            className={classes.estimateButton}
            variant="contained"
          >
            Free Estimate
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={() => setTabIndex(2)}
            component={Link}
            to="/revolution"
            variant="outlined"
            className={classes.learnButton}
          >
            <span style={{ marginRight: matchesSM ? 0 : 5 }}>Learn More</span>
            <ButtonArrow
              width={15}
              height={15}
              fill={theme.palette.common.blue}
            />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );

  const col2 = () => (
    <Grid sm item className={classes.animationContainer}>
      <Lottie options={defaultOptions} height={'100'} width={'100'} />
    </Grid>
  );

  return (
    <TwoColumnSection
      col1={col1}
      col2={col2}
      container
      direction="row"
      alignItems="center"
      justify="flex-end"
    />
  );
};

export default HeroSection;
