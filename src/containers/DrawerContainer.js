import { connect } from 'react-redux';
import { setTabIndex, setDrawerOpen } from '../redux/actions/tabsActions';
import Drawer from '../components/header/Drawer';

const mapStateToProps = ({ tabs: { tabIndex, drawerOpen } }) => ({
  tabIndex,
  drawerOpen
});

export default connect(mapStateToProps, { setTabIndex, setDrawerOpen })(Drawer);
