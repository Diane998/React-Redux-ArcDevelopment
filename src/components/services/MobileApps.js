import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import CallToActionSectionContainer from '../../containers/CallToActionSectionContainer';
import ServicesNav from '../section-templates/ServicesNav';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import swiss from '../../assets/swissKnife.svg';
import access from '../../assets/extendAccess.svg';
import engagement from '../../assets/increaseEngagement.svg';
import integrationAnimation from '../../animations/integrationAnimation/data';

const useStyles = makeStyles(theme => ({
  heading: {
    maxWidth: '40em'
  },
  arrowContainer: {
    marginTop: '0.5em'
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em'
    }
  }
}));

const MobileApps = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const row0 = [
    {
      h2: 'IOS/Android App Development',
      paragraphs: [
        'Mobile apps allow you to take your tools on the go.',
        'Whether you want an app for your customers, employess, or yourself, we can build cross-platform native solutions for any part of your business process. This opens you up to a whole new world of possibilities by taking advantage of phone features like the camera, GPS, notifications, and more.',
        'Convenience. Connection.'
      ]
    }
  ];

  const row1 = [
    {
      h4: 'Integration',
      paragraphs: [
        'Our technology eables innate interconnection between web and mobile application, putting everything you need right in one convenient place.',
        'This allows you to extend your reach, reinvent interactions, and develop a stronger relationship with your users thatn ever before.'
      ],
      align: matchesSM ? 'center' : undefined
    },
    {
      lottie: defaultOptions,
      style: { maxWidth: '20em' }
    },
    {
      h4: 'Simultaneous Platform Support',
      paragraphs: [
        'Our tcutting-edge development process allows us to create apps for iPhone, Andriod, and tablets - all at the same time.',
        'This significantly reduces costs and creates a more unified brand experience across al devices.'
      ],
      align: matchesSM ? 'center' : 'right'
    }
  ];

  const row2 = [
    {
      h4: 'Extend Functionality',
      src: swiss,
      alt: 'swiss army knife',
      style: { maxWidth: matchesXS ? '80vw' : '' }
    },
    {
      h4: 'Extend Access',
      src: access,
      alt: 'tear=one-off sign',
      style: { maxWidth: matchesXS ? '80vw' : '28em' }
    },
    {
      h4: 'Increase Engagement',
      src: engagement,
      alt: 'app with notification',
      style: { maxWidth: matchesXS ? '80vw' : '' }
    }
  ];

  return (
    <Grid container direction="column">
      <ServicesNav
        row={row0}
        backRoute="/services/customsoftware"
        forwardRoute="/services/websites"
      />
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ margin: '5em 0' }}
      >
        {row1.map((col, i) => (
          <React.Fragment key={i}>
            {i % 2 !== 0 ? (
              <Grid item>
                <Lottie options={col.lottie} style={col.style} />
              </Grid>
            ) : (
              <Grid item container direction="column" md>
                <Grid item>
                  <Typography align={col.align} variant="h4" gutterBottom>
                    {col.h4}
                  </Typography>
                </Grid>
                <Grid item>
                  {col.paragraphs.map((p, i) => (
                    <Typography
                      key={`p${i}`}
                      align={col.align}
                      variant="body1"
                      paragraph
                    >
                      {p}
                    </Typography>
                  ))}
                </Grid>
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ marginBottom: '5em' }}
      >
        {row2.map(({ h4, src, alt, style }, i) => (
          <Grid
            key={i}
            item
            container
            alignItems="center"
            direction="column"
            md
          >
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                {h4}
              </Typography>
            </Grid>
            <Grid item>
              <img src={src} alt={alt} style={style} />
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid item>
        <CallToActionSectionContainer />
      </Grid>
    </Grid>
  );
};

export default MobileApps;
