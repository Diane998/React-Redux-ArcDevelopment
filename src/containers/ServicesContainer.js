import { connect } from 'react-redux';
import { setTabIndex } from '../redux/actions/tabsActions';
import Services from '../components/pages/Services';

const mapStateToProps = (state, ownProps) => ({
  match: ownProps.match ? ownProps.match.path : null
});

export default connect(mapStateToProps, { setTabIndex })(Services);
