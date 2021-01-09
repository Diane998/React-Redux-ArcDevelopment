import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ThreeRowSection from '../section-templates/ThreeRowSection';

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
    link: '/customsoftware',
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
    link: '/mobileapps',
    subtitles: [
      ' Extend Functionality. Extend Access. Increase Engagement.',
      'Integrate your web experience or create a standalone app with either mobile platform.'
    ],
    image: mobileAppsIcon,
    alt: 'mobile app icon'
  },
  {
    title: 'Website Development',
    link: '/websites',
    subtitles: [
      'Reach More. Discover More. Sell More.',
      'Optimized for Search Engines, built for speed.'
    ],
    image: websitesIcon,
    alt: 'website icon'
  }
];

const ServicesSection = () => {
  const classes = useStyles();

  return (
    <ThreeRowSection
      arr={services}
      classes={classes}
      justifyForEven={''}
      justifyForOdd={'flex-end'}
    />
  );
};

export default ServicesSection;
