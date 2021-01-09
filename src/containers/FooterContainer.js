import { connect } from 'react-redux';
import { setTabIndex } from '../redux/actions/tabsActions';
import Footer from '../components/footer/Footer';

export default connect(null, { setTabIndex })(Footer);
