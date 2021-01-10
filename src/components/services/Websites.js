import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import CallToActionSectionContainer from '../../containers/CallToActionSectionContainer';
import ServicesNav from '../section-templates/ServicesNav';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import analytics from '../../assets/analytics.svg';
import seo from '../../assets/seo.svg';
import outreach from '../../assets/outreach.svg';
import ecommerce from '../../assets/ecommerce.svg';

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
  },
  paragraphContainer: {
    maxWidth: '30em'
  }
}));

const Websites = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const row0 = [
    {
      h2: 'Website Development',
      paragraphs: [
        'Having a website is a necessity in today’s business world. They give you one central, public location to let people know who you are, what you do, and why you’re the best at it.',
        'From simply having your hours posted to having a full fledged online store, making yourself as accessible as possible to users online drives growth and enables you to reach new customers.'
      ]
    }
  ];

  const rows = [
    {
      h4: ['Analytics'],
      src: analytics,
      style: { marginLeft: '-2.75em' },
      alt: "graph with magnifying glass revealing 1's and 0's",
      imgStyle: { marginLeft: '-2.75em' },
      paragraphs: [
        'Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden patterns and trends in your business, empowering you to make smarter decisions with measurable effects.'
      ],
      typography: matchesSM ? 'center' : undefined
    },
    {
      h4: ['E-Commerce'],
      src: ecommerce,
      alt: 'world outline made of dollar signs',
      paragraphs: [
        'It’s no secret that people like to shop online.',
        'In 2017 over $2.3 trillion was spent in e-commerce, and it’s time for your slice of that pie.'
      ],
      justify: 'flex-end'
    },
    {
      h4: ['Outreach'],
      src: outreach,
      alt: 'megaphone',
      paragraphs: [
        'Draw people in with a dazzling website. Showing off your products online is a great way to help customers decide what’s right for them before visiting in person.'
      ],
      typography: matchesSM ? 'center' : undefined
    },
    {
      h4: ['Search Engine', 'Optimization'],
      src: seo,
      alt: "website standing on winner's podium",
      paragraphs: [
        'How often have you ever been to the second page of Google results?',
        'If you’re like us, probably never.',
        'Customers don’t go there either, so we make sure your website is designed to end up on top.'
      ],
      justify: 'flex-end'
    }
  ];

  return (
    <Grid container direction="column">
      <ServicesNav
        row={row0}
        backRoute="/services/mobileapps"
        forwardRoute="/services"
      />

      {rows.map((content, i) => (
        <Grid
          key={i}
          item
          container
          direction={matchesSM ? 'column' : 'row'}
          alignItems="center"
          className={classes.rowContainer}
          style={{ marginTop: '5em' }}
          justify={i % 2 === 0 ? undefined : content.justify}
        >
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                {content.h4.map((text, i) => (
                  <Typography key={i} align="center" variant="h4">
                    {text}
                  </Typography>
                ))}
              </Grid>
              <Grid item style={{ margin: matchesSM ? 0 : '0.7em' }}>
                <img
                  src={content.src}
                  style={content.imgStyle}
                  alt={content.alt}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.paragraphContainer}>
            {content.paragraphs.map((p, i) => (
              <Typography
                key={i}
                style={{ padding: '0.5em 0' }}
                align={matchesSM ? 'center' : undefined}
                variant="body1"
              >
                {p}
              </Typography>
            ))}
          </Grid>
        </Grid>
      ))}

      <Grid item>
        <CallToActionSectionContainer />
      </Grid>
    </Grid>
  );
};

export default Websites;
