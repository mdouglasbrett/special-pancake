import { connect } from 'react-redux';
import Feed from '../../components/Feed/Feed';

const mapStateToProps = (state) => ({
  items: state.feed.items,
  filters: state.filters
});

export default connect(mapStateToProps)(Feed);
