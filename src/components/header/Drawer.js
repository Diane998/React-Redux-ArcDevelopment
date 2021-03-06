import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { routes } from './routes';

import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  toolbar: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em'
    }
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  drawer: { backgroundColor: theme.palette.common.blue },
  drawerItemText: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7
  },
  drawerItemTextEstimate: {
    backgroundColor: theme.palette.common.orange
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1
    }
  }
}));

const renderList = (setDrawerOpen, setTabIndex, tabIndex, classes) =>
  routes.map(({ name, link }, i) =>
    i === 5 ? (
      <ListItem
        divider
        key={name}
        button
        classes={{
          root: classes.drawerItemTextEstimate,
          selected: classes.drawerItemSelected
        }}
        onClick={() => {
          setDrawerOpen(false);
          setTabIndex(5);
        }}
        component={Link}
        to="/estimate"
        selected={tabIndex === 5}
      >
        <ListItemText className={classes.drawerItemText} disableTypography>
          Free Estimate
        </ListItemText>
      </ListItem>
    ) : (
      <ListItem
        divider
        key={name}
        button
        component={Link}
        to={link}
        onClick={() => {
          setDrawerOpen(false);
          setTabIndex(i);
        }}
        selected={tabIndex === i}
        classes={{ selected: classes.drawerItemSelected }}
      >
        <ListItemText className={classes.drawerItemText} disableTypography>
          {name}
        </ListItemText>
      </ListItem>
    )
  );

const Drawer = ({ tabIndex, setTabIndex, drawerOpen, setDrawerOpen }) => {
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={drawerOpen}
        classes={{ paper: classes.drawer }}
        onClose={() => setDrawerOpen(false)}
        onOpen={() => setDrawerOpen(true)}
      >
        <div className={classes.toolbar} />
        <List disablePadding>
          {renderList(setDrawerOpen, setTabIndex, tabIndex, classes)}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
};

export default Drawer;
