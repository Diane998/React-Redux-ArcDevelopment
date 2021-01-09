import { connect } from 'react-redux';
import { setTabIndex } from '../redux/actions/tabsActions';
import ServicesSection from '../components/sections/ServicesSections';

export default connect(null, { setTabIndex })(ServicesSection);
