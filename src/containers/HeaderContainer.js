import { connect } from 'react-redux';
import { setTabIndex } from '../redux/actions/tabsActions';
import Header from '../components/header/Header';

export default connect(null, { setTabIndex })(Header);
