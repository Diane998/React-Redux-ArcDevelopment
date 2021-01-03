import { connect } from 'react-redux';
import { setTabIndex } from '../redux/actions/tabsActions';
import TabItems from '../components/header/TabItems';

const mapStateToProps = ({ tabs: { tabIndex } }) => ({ tabIndex });

export default connect(mapStateToProps, { setTabIndex })(TabItems);
