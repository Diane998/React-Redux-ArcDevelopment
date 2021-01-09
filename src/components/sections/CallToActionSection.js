import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../ui/ButtonArrow';

import TwoColumnSection from '../section-templates/TwoColumnSection';

import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

const useStyles = makeStyles(theme => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: 'inherit'
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 80,
    width: 205,
    margin: '0em 5em 0em 2em',
    fontSize: '1.5rem',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    },
    [theme.breakpoints.down('sm')]: {
      margin: 0
    }
  }
}));

const CallToActionSection = ({ setTabIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const col1 = () => (
    <Grid
      item
      style={{
        marginLeft: matchesSM ? 0 : '5em',
        textAlign: matchesSM ? 'center' : 'inherit'
      }}
    >
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h2">
            Simple Software.
            <br />
            Revolutionary Results.
          </Typography>
          <Typography variant="subtitle2" style={{ fontSize: '1.5rem' }}>
            Take advantage of the 21st Century.
          </Typography>
          <Grid
            item
            container
            justify={matchesSM ? 'center' : undefined}
            style={{ margin: matchesSM ? '1em 0' : 0 }}
          >
            <Button
              onClick={() => setTabIndex(2)}
              component={Link}
              to="/revolution"
              className={classes.learnButton}
              variant="outlined"
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
      </Grid>
    </Grid>
  );

  const col2 = () => (
    <Grid item>
      <Button
        onClick={() => setTabIndex(5)}
        component={Link}
        to="/estimate"
        variant="contained"
        className={classes.estimateButton}
      >
        Free Estimate
      </Button>
    </Grid>
  );

  return (
    <TwoColumnSection
      col1={col1}
      col2={col2}
      container
      className={classes.background}
      alignItems="center"
      justify={matchesSM ? 'center' : 'space-between'}
      direction={matchesSM ? 'column' : 'row'}
    />
  );
};

export default CallToActionSection;
