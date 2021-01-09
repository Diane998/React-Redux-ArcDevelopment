import { connect } from 'react-redux';
import { setTabIndex } from '../redux/actions/tabsActions';
import CallToAction from '../components/sections/CallToActionSection';

export default connect(null, { setTabIndex })(CallToAction);
