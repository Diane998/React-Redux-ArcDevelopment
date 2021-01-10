import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import backArrow from '../../assets/backArrow.svg';
import forwardArrow from '../../assets/forwardArrow.svg';

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

const ServicesNav = ({ row, backRoute, forwardRoute }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid
      item
      container
      direction="row"
      justify={matchesMD ? 'center' : undefined}
      className={classes.rowContainer}
      style={{ marginTop: matchesXS ? '1em' : '2em' }}
    >
      <Hidden mdDown>
        <Grid
          item
          className={classes.arrowContainer}
          style={{ marginRight: '1em', marginLeft: '-3.5em' }}
        >
          <IconButton
            style={{ backgroundColor: 'transparent' }}
            component={Link}
            to={backRoute}
          >
            <img src={backArrow} alt="Back to the Services Page" />
          </IconButton>
        </Grid>
      </Hidden>
      {row.map(({ h2, paragraphs }, i) => (
        <Grid
          key={i}
          item
          container
          direction="column"
          className={classes.heading}
        >
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant="h2">
              {h2}
            </Typography>
          </Grid>
          <Grid item>
            {paragraphs.map((p, i) => (
              <Typography
                key={i}
                align={matchesMD ? 'center' : undefined}
                variant="body1"
                paragraph
              >
                {p}
              </Typography>
            ))}
          </Grid>
        </Grid>
      ))}
      <Hidden mdDown>
        <Grid item className={classes.arrowContainer}>
          <IconButton
            style={{ backgroundColor: 'transparent' }}
            component={Link}
            to={forwardRoute}
          >
            <img
              src={forwardArrow}
              alt="Forward to the iOS/Android App Development Page"
            />
          </IconButton>
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default ServicesNav;
