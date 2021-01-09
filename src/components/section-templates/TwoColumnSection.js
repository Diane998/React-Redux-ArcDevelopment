import React from 'react';
import { Grid } from '@material-ui/core';

const TwoColumnSection = ({ col1, col2 }) => {
  return (
    <Grid item style={{ width: '100vw' }}>
      <Grid container direction="row" alignItems="center" justify="flex-end">
        {col1()}
        {col2()}
      </Grid>
    </Grid>
  );
};

export default TwoColumnSection;
