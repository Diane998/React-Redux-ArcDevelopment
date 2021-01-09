import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { routes } from './routes';

import { Tabs, Tab } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  tabContainer: { marginLeft: 'auto' },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px'
  },
  estimateTab: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.secondary
  }
}));

const TabItems = ({ tabIndex, setTabIndex }) => {
  const classes = useStyles();

  const handleChange = (e, i) => {
    setTabIndex(i);
  };

  return (
    <>
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {routes.map(({ name, link }, i) =>
          i !== 5 ? (
            <Tab
              key={name}
              className={classes.tab}
              component={Link}
              to={link}
              label={name}
            />
          ) : (
            <Tab
              style={{
                backgroundColor: 'orange',
                borderRadius: '50px',
                margin: '0 25px',
                height: '45px',
                font: 'white',
                shadow: 'none',
                opacity: 1
              }}
              key={name}
              className={classes.estimateTab}
              component={Link}
              to={link}
              label={name}
            />
          )
        )}
      </Tabs>
    </>
  );
};

export default TabItems;
