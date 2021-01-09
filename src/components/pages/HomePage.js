import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Grid, Button, Typography, Card, CardContent } from '@material-ui/core';
import ButtonArrow from '../ui/ButtonArrow';

import ServicesSection from '../sections/ServicesSections';

import animationData from '../../animations/landinganimation/data';
import customSoftwareIcon from '../../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../../assets/mobileIcon.svg';
import websitesIcon from '../../assets/websiteIcon.svg';
import revolutionBackround from '../../assets/repeatingBackground.svg';
import infoBackground from '../../assets/infoBackground.svg';

const useStyles = makeStyles(theme => ({
  mainContainer: { marginTop: '5em', width: '100%' },
  animation: {
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
  },
  textContainer: {
    minWidth: '21.5em',
    marginLeft: '5em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  },
  buttonContainer: {
    marginTop: '1em',
    [theme.breakpoints.down('xs')]: {
      margin: '1em 1em'
    }
  },
  estimate: {
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
  learn: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145
  },
  learnServices: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    margin: '0.5em 0em 1em 0em'
  },
  h2: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '2em',
      padding: '0em 0.5em'
    }
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange
  },
  subtitle: {
    marginBottom: '1em'
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  },
  servicesContainer: {
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25
    }
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackround})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: '8em 0',
      borderRadius: 0,
      width: '100%'
    }
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

const HomePage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Grid className={classes.mainContainer} container direction="column">
      <Grid item>
        {/* Hero block */}
        <Grid container direction="row" alignItems="center" justify="flex-end">
          <Grid
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined
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
            <Grid
              container
              alignItems="center"
              justify="space-around"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  component={Link}
                  to="/estimate"
                  className={classes.estimate}
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
                  className={classes.learn}
                >
                  <span style={{ marginRight: matchesSM ? 0 : 5 }}>
                    Learn More
                  </span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={'100'} qidth={'100'} />
          </Grid>
        </Grid>
      </Grid>

      <ServicesSection />

      <Grid item>
        {/* rev block */}
        <Grid
          container
          style={{ height: '100em', marginTop: '12em' }}
          alignItems="center"
          justify="center"
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: 'center' }}
              >
                <Grid item>
                  <Typography variant="h3">The Revolution</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights with cutting-eedge texhnology is a recipe
                    for revolution.
                  </Typography>
                  <Button
                    component={Link}
                    to="/revolution"
                    variant="outlined"
                    className={classes.learn}
                  >
                    <span style={{ marginRight: 5 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      <Grid item>
        {/* Info block */}
        <Grid
          container
          style={{ height: '80em' }}
          alignItems="center"
          direction="row"
          className={classes.infoBackground}
        >
          <Grid
            item
            container
            style={{
              position: 'absolute',
              textAlign: matchesXS ? 'center' : undefined
            }}
            direction={matchesXS ? 'column' : 'row'}
          >
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
          </Grid>
        </Grid>
      </Grid>
      <Grid item>{/* call to action */}</Grid>
    </Grid>
  );
};

export default HomePage;
