import { connect } from 'react-redux';
import { setTabIndex } from '../redux/actions/tabsActions';
import Contact from '../components/pages/Contact';

export default connect(null, { setTabIndex })(Contact);
