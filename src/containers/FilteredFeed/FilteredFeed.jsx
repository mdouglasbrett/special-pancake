import { connect } from 'react-redux';
import Feed from '../../components/Feed/Feed';
import { toggleFilter } from '../../actions/actions';

const mapStateToProps = (state) => ({
  items: state.feed.items,
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  onFilterToggle: () => dispatch(toggleFilter())
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
