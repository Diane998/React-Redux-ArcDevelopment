import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setTabIndex } from '../../redux/actions/tabsActions';
import { makeStyles } from '@material-ui/styles';

import { Tabs, Tab, Button, Menu, MenuItem } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  tabContainer: { marginLeft: 'auto' },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px'
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    margin: '0px 25px 0px 50px',
    height: '45px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: '0px'
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1
    }
  }
}));

const routes = [
  { name: 'Home', link: '/', activeIndex: 0 },
  { name: 'Services', link: '/services', activeIndex: 1 },
  { name: 'The Revolution', link: '/revolution', activeIndex: 2 },
  { name: 'About Us', link: '/about', activeIndex: 3 },
  { name: 'Contact Us', link: '/contact', activeIndex: 4 },
  { name: 'Free Estimate', link: '/estimate', activeIndex: 5 }
];

const TabsContainer = ({ tabIndex, setTabIndex }) => {
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
        indicator="primary"
      >
        {routes.map(({ name, link }, i) => (
          <Tab
            key={name}
            className={classes.tab}
            component={Link}
            to={link}
            label={name}
          />
        ))}
      </Tabs>
    </>
  );
};

const mapStateToProps = ({ tabs: { tabIndex } }) => ({ tabIndex });

export default connect(mapStateToProps, { setTabIndex })(TabsContainer);
