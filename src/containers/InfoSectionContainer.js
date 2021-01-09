import { connect } from 'react-redux';
import { setTabIndex } from '../redux/actions/tabsActions';
import InfoSection from '../components/sections/InfoSection';

export default connect(null, { setTabIndex })(InfoSection);
