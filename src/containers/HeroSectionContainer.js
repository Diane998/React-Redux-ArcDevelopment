import { connect } from 'react-redux';
import { setTabIndex } from '../redux/actions/tabsActions';
import HeroSection from '../components/sections/HeroSection';

export default connect(null, { setTabIndex })(HeroSection);
