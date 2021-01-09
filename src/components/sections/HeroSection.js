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
    }
  },
  h2: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '2em',
      padding: '0em 0.5em'
    }
  },
  buttonContainer: {
    marginTop: '1em',
    [theme.breakpoints.down('xs')]: {
      margin: '1em 1em'
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
    }
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145
  }
}));

const HeroSection = () => {
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
    <Grid sm item className={classes.animation}>
      <Lottie options={defaultOptions} height={'100'} qidth={'100'} />
    </Grid>
  );

  return <TwoColumnSection col1={col1} col2={col2} />;
};

export default HeroSection;
