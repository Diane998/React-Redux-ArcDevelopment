import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Grid, Button, Typography } from '@material-ui/core';
import ButtonArrow from '../ui/ButtonArrow';

const renderSubtitles = arr =>
  arr.map(subtitle => <Typography variant="subtitle1">{subtitle}</Typography>);

const renderSpecialText = (arr, classes) =>
  arr.map(({ text, span }) => (
    <Typography variant="subtitle1">
      {text}
      <span className={classes}>{span}</span>
    </Typography>
  ));

const ThreeRowSection = ({ arr, classes, justifyForEven, justifyForOdd }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {arr.map((section, i) =>
        i % 2 === 0 ? (
          <Grid item>
            <Grid
              container
              direction="row"
              justify={matchesSM ? 'center' : justifyForEven}
              className={classes.container}
            >
              <Grid
                item
                style={{
                  marginLeft: matchesSM ? 0 : '5em',
                  textAlign: matchesSM ? 'center' : justifyForEven
                }}
              >
                <Typography variant="h4">{section.title}</Typography>
                {renderSubtitles(section.subtitles)}
                {section.specialText
                  ? renderSpecialText(section.specialText, classes.specialText)
                  : null}
                <Button
                  component={Link}
                  to={section.link}
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
            </Grid>
          </Grid>
        ) : (
          <Grid item>
            <Grid
              container
              direction="row"
              justify={matchesSM ? 'center' : justifyForOdd}
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
                  to={section.link}
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
            </Grid>
          </Grid>
        )
      )}
    </>
  );
};

export default ThreeRowSection;
