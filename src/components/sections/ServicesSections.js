import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Grid, Button, Typography } from '@material-ui/core';
import ButtonArrow from '../ui/ButtonArrow';

import OneColumnSection from '../section-templates/OneColumnSection';

import customSoftwareIcon from '../../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../../assets/mobileIcon.svg';
import websitesIcon from '../../assets/websiteIcon.svg';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25
    }
  },
  subtitle: {
    marginBottom: '1em'
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange
  },
  button: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    margin: '0.5em 0em 1em 0em'
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  }
}));

const services = [
  {
    title: 'Custom Software Development',
    route: '/services',
    nestedRoute: '/customsoftware',
    subtitles: ['Save Energy. Save Time. Save Money.'],
    specialText: [
      {
        text: 'Complete digital solutions, from investigation to ',
        span: 'celebration.'
      }
    ],
    image: customSoftwareIcon,
    alt: 'custom software icon'
  },
  {
    title: 'IOS/Android App Development',
    route: '/services',
    nestedRoute: '/mobileapps',
    subtitles: [
      ' Extend Functionality. Extend Access. Increase Engagement.',
      'Integrate your web experience or create a standalone app with either mobile platform.'
    ],
    image: mobileAppsIcon,
    alt: 'mobile app icon'
  },
  {
    title: 'Website Development',
    route: '/services',
    nestedRoute: '/websites',
    subtitles: [
      'Reach More. Discover More. Sell More.',
      'Optimized for Search Engines, built for speed.'
    ],
    image: websitesIcon,
    alt: 'website icon'
  }
];

const renderSubtitles = arr =>
  arr.map((subtitle, i) => (
    <Typography key={i} variant="subtitle1">
      {subtitle}
    </Typography>
  ));

const renderSpecialText = (arr, classes) =>
  arr.map(({ text, span }, i) => (
    <Typography key={i} variant="subtitle1">
      {text}
      <span className={classes}>{span}</span>
    </Typography>
  ));

const ServicesSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {services.map((section, i) =>
        i % 2 === 0 ? (
          <OneColumnSection
            key={i}
            justify={matchesSM ? 'center' : undefined}
            className={classes.container}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : '5em',
                textAlign: matchesSM ? 'center' : ''
              }}
            >
              <Typography variant="h4">{section.title}</Typography>
              {renderSubtitles(section.subtitles)}
              {section.specialText
                ? renderSpecialText(section.specialText, classes.specialText)
                : null}
              <Button
                component={Link}
                to={`${section.route}${section.nestedRoute}`}
                className={classes.button}
                variant="outlined"
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img
                className={classes.icon}
                src={section.image}
                alt={section.alt}
              />
            </Grid>
          </OneColumnSection>
        ) : (
          <OneColumnSection
            key={i}
            justify={matchesSM ? 'center' : 'flex-end'}
            className={classes.container}
          >
            <Grid
              item
              style={{
                textAlign: matchesSM ? 'center' : undefined
              }}
            >
              <Typography variant="h4">{section.title}</Typography>
              {renderSubtitles(section.subtitles)}
              {section.specialText
                ? renderSpecialText(section.specialText, classes.specialText)
                : null}
              <Button
                component={Link}
                to={`${section.route}${section.nestedRoute}`}
                className={classes.button}
                variant="outlined"
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
              <img
                className={classes.icon}
                src={section.image}
                alt={section.alt}
              />
            </Grid>
          </OneColumnSection>
        )
      )}
    </>
  );
};

export default ServicesSection;
