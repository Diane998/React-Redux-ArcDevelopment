import React from 'react';
import { Grid } from '@material-ui/core';

const TwoColumnSection = ({ col1, col2, ...otherProps }) => {
  return (
    <Grid item>
      <Grid {...otherProps}>
        {col1()}
        {col2()}
      </Grid>
    </Grid>
  );
};

export default TwoColumnSection;
