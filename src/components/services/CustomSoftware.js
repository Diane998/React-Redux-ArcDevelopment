import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import CallToActionSectionContainer from '../../containers/CallToActionSectionContainer';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ServicesNav from '../section-templates/ServicesNav';

import lightbulb from '../../assets/bulb.svg';
import cash from '../../assets/cash.svg';
import stopwatch from '../../assets/stopwatch.svg';
import roots from '../../assets/root.svg';
import documentsAnimation from '../../animations/documentsAnimation/data';
import scaleAnimation from '../../animations/scaleAnimation/data';
import automationAnimation from '../../animations/automationAnimation/data';
import uxAnimation from '../../animations/uxAnimation/data';

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
  itemContainer: {
    maxWidth: '40em'
  }
}));

const CustomSoftware = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const rows0 = [
    {
      h2: 'Custom Software Development',
      paragraphs: [
        'Whether we’re replacing old software or inventing new solutions, Arc Development is here to help your business tackle technology.',
        'Using regular commercial software leaves you with a lot of stuff you don’t need, without some of the stuff you do need, and ultimately controls the way you work. Without using any software at all you risk falling behind competitors and missing out on huge savings from increased efficiency.',
        'Our custom solutions are designed from the ground up with your needs, wants, and goals at the core. This collaborative process produces finely tuned software that is much more effective at improving your workflow and reducing costs than generalized options.',
        'We create exactly what you what, exactly how you want it.'
      ]
    }
  ];

  const rows1 = [
    { h4: 'Save Energy', img: lightbulb, alt: 'lightbulb' },
    { h4: 'Save Time', img: stopwatch, alt: 'stopwatch' },
    { h4: 'Save Money', img: cash, alt: 'cash' }
  ];

  const rows2 = [
    {
      h4: 'Digital Documents & Data',
      paragraphs: [
        'Reduce Errors. Reduce Waste. Reduce Costs.',
        'Billions are spent annually on the purchasing, printing, and distribution of paper. On top of the massive environmental impact this has, it causes harm to your bottom line as well.',
        ' By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your communication, and help the Earth.'
      ],
      lottie: {
        options: documentsOptions,
        style: { maxHeight: 275, maxWidth: 275, minHeight: 250 }
      },
      direction: matchesSM ? 'column-reverse' : 'row'
    },
    {
      h4: 'Scale',
      paragraphs: [
        'Whether you’re a large brand, just getting started, or taking off right now, our application architecture ensures pain-free growth and reliability.'
      ],
      lottie: {
        options: scaleOptions,
        style: { maxHeight: 260, maxWidth: 280 }
      },
      direction: matchesSM ? 'column-reverse' : 'row-reverse'
    }
  ];

  const rows3 = [
    {
      image: {
        src: roots,
        alt: 'tree with roots extending out',
        height: matchesSM ? '300em' : '450em',
        width: matchesSM ? '300em' : '450em'
      },
      h4: 'Root-Cause Analysis',
      paragraphs: [
        'Many problems are merely symptoms of larger, underlying issues.',
        'We can help you thoroughly examine all areas of your business to develop a holistic plan for the most effective implementation of technology.'
      ]
    }
  ];

  const rows4 = [
    {
      h4: 'Automation',
      paragraphs: [
        'Why waste time when you don’t have to?',
        'We can help you identify processes with time or event based actions which can now easily be automated.',
        'Increasing efficiency increases profits, leaving you more time to focus on your business, not busywork.'
      ],
      lottie: {
        options: automationOptions,
        style: { mmaxHeight: 290, maxWidth: 280 }
      },
      direction: matchesSM ? 'column-reverse' : 'row'
    },
    {
      h4: 'User Experience Design',
      paragraphs: [
        'A good design that isn’t usable isn’t a good design.',
        'So why are so many pieces of software complicated, confusing, and frustrating?',
        ' By prioritizing users and the real ways they interact with technology we’re able to develop unique, personable experiences that solve problems rather than create new ones.'
      ],
      lottie: {
        options: uxOptions,
        style: { maxHeight: 310, maxWidth: 155 }
      },
      direction: matchesSM ? 'column-reverse' : 'row-reverse'
    }
  ];

  const renderTwoCols = arr =>
    arr.map((row, i) => (
      <Grid
        key={i}
        item
        container
        className={classes.itemContainer}
        direction={row.direction}
        style={{ marginBottom: matchesMD ? '2em' : 0 }}
        md
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography variant="h4" align={matchesSM ? 'center' : undefined}>
              {row.h4}
            </Typography>
          </Grid>
          <Grid item>
            {row.paragraphs.map((p, i) => (
              <Typography
                key={`paragraph ${i}`}
                variant="body1"
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                {p}
              </Typography>
            ))}
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie options={row.lottie.options} style={row.lottie.style} />
        </Grid>
      </Grid>
    ));

  return (
    <Grid container direction="column">
      <ServicesNav row={rows0} />
      <Grid
        item
        container
        direction="row"
        justify="center"
        style={{ marginTop: '5em', marginBottom: '8em' }}
        className={classes.rowContainer}
      >
        {rows1.map(({ h4, img, alt }, i) => (
          <Grid
            key={i}
            item
            container
            direction="column"
            md
            alignItems="center"
            style={{ maxWidth: '40em' }}
          >
            <Grid item>
              <Typography variant="h4">{h4}</Typography>
            </Grid>
            <Grid item>
              <img src={img} alt={alt} />
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid
        item
        container
        alignItems={matchesMD ? 'center' : undefined}
        direction={matchesMD ? 'column' : 'row'}
        justify="space-between"
        className={classes.rowContainer}
      >
        {renderTwoCols(rows2)}
      </Grid>
      <Grid
        item
        container
        direction="row"
        style={{ marginTop: '8em', marginBottom: '8em' }}
        className={classes.rowContainer}
      >
        {rows3.map(
          ({ image: { src, alt, height, width }, h4, paragraphs }, i) => (
            <Grid key={i} item container direction="column" alignItems="center">
              <Grid item>
                <img src={src} alt={alt} height={height} width={width} />
              </Grid>
              <Grid item>
                <Typography variant="h4" align="center" gutterBottom>
                  {h4}
                </Typography>
                {paragraphs.map((p, i) => (
                  <Typography
                    key={i}
                    variant="body1"
                    align="center"
                    gutterBottom
                  >
                    {p}
                  </Typography>
                ))}
              </Grid>
            </Grid>
          )
        )}
      </Grid>
      <Grid
        item
        container
        alignItems={matchesMD ? 'center' : undefined}
        direction={matchesMD ? 'column' : 'row'}
        justify="space-between"
        style={{ marginBottom: '8em' }}
        className={classes.rowContainer}
      >
        {renderTwoCols(rows4)}
      </Grid>
      <Grid item>
        <CallToActionSectionContainer />
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
