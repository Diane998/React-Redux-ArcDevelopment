import { connect } from 'react-redux';
import { setTabIndex } from '../redux/actions/tabsActions';
import RevolutionSection from '../components/sections/RevolutionSection';

export default connect(null, { setTabIndex })(RevolutionSection);
