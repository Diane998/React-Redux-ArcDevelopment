import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import { Grid, Hidden } from '@material-ui/core';

import footerAdornment from '../../assets/Footer Adornment.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative'
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em'
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em'
    }
  },
  mainContainer: {
    position: 'absolute'
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  gridItem: {
    margin: '3em'
  },
  icon: {
    height: '4em',
    width: '4em',
    [theme.breakpoints.down('xs')]: {
      height: '2em',
      width: '2em'
    }
  },
  socialContainer: {
    position: 'abosolute',
    marginTop: '-5.1em',
    marginLeft: '-1.5em',
    [theme.breakpoints.down('xs')]: {
      marginTop: '-3.3em',
      marginLeft: ' -1.2em'
    }
  }
}));

const routes = [
  [{ text: 'Home', route: '/' }],
  [
    { text: 'Services', route: '/services' },
    { text: 'Custom Software Development', route: '/services/customsoftware' },
    { text: 'IOS/Android App Development', route: '/services/websites' }
  ],
  [
    { text: 'The Revolution', route: '/revolution' },
    { text: 'Vision', route: '/revolution' },
    { text: 'Technology', route: '/revolution' },
    { text: 'Process', route: '/revolution' }
  ],
  [
    { text: 'About Us', route: '/about' },
    { text: 'History', route: '/about' },
    { text: 'Team', route: '/about' }
  ],
  [{ text: 'Contact Us', route: '/contact' }]
];

const Footer = ({ setTabIndex }) => {
  const classes = useStyles();

  const renderCols = (arr, i) =>
    arr.map(({ text, route }) => (
      <Grid
        key={text}
        item
        onClick={() => setTabIndex(i)}
        component={Link}
        to={route}
        className={classes.link}
      >
        {text}
      </Grid>
    ));

  const renderRows = arr =>
    arr.map((arr, i) => (
      <Grid key={i} item className={classes.gridItem}>
        <Grid container direction="column" spacing={2}>
          {renderCols(arr, i)}
        </Grid>
      </Grid>
    ));

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          {renderRows(routes)}
        </Grid>
      </Hidden>
      <img
        className={classes.adornment}
        alt="footer adorment"
        src={footerAdornment}
      />

      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={'a'}
          href="https://www.facebook.com"
          rel="noopener noreferver"
          target="_blank"
        >
          <img className={classes.icon} src={facebook} alt="facebook" />
        </Grid>
        <Grid
          item
          component={'a'}
          href="https://www.twitter.com"
          rel="noopener noreferver"
          target="_blank"
        >
          <img className={classes.icon} src={twitter} alt="twitter" />
        </Grid>
        <Grid
          item
          component={'a'}
          href="https://www.instagram.com"
          rel="noopener noreferver"
          target="_blank"
        >
          <img className={classes.icon} src={instagram} alt="instagram" />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
