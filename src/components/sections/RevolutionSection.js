import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Grid, Button, Typography, Card, CardContent } from '@material-ui/core';
import ButtonArrow from '../ui/ButtonArrow';

import OneColumnSection from '../section-templates/OneColumnSection';

import revolutionBackround from '../../assets/repeatingBackground.svg';

const useStyles = makeStyles(theme => ({
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
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackround})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  },
  learnButtom: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145
  }
}));

const RevolutionSection = ({ setTabIndex }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <OneColumnSection
      style={{ height: '100em', marginTop: '12em' }}
      alignItems="center"
      justify="center"
    >
      <Card className={classes.revolutionCard}>
        <CardContent>
          <Grid container direction="column" style={{ textAlign: 'center' }}>
            <Grid item>
              <Typography variant="h3">The Revolution</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                Visionary insights with cutting-eedge texhnology is a recipe for
                revolution.
              </Typography>
              <Button
                onClick={() => setTabIndex(2)}
                component={Link}
                to="/revolution"
                variant="outlined"
                className={classes.learnButtom}
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
    </OneColumnSection>
  );
};

export default RevolutionSection;
