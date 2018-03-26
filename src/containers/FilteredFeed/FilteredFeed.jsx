import { connect } from 'react-redux';
import Feed from '../../components/Feed/Feed';
import { addFilter, removeFilter } from '../../actions/actions';

const toggleFilter = (id) => (dispatch, getState) => {
  return id;
};


const mapStateToProps = (state) => ({
  items: state.feed.items.filter(i => !state.filters.activeFilters.includes(i))
});

const mapDispatchToProps = (dispatch) => ({
  onFilterToggle: (id) => dispatch(toggleFilter(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
