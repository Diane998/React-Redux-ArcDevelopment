import React from 'react';

import { Grid } from '@material-ui/core';

const OneColumnSection = ({ children, ...otherProps }) => {
  return (
    <Grid item>
      <Grid container direction="row" {...otherProps}>
        {children}
      </Grid>
    </Grid>
  );
};

export default OneColumnSection;
