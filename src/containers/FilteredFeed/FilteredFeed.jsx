import { connect } from 'react-redux';
import Feed from '../../components/Feed/Feed';
import { toggleFilter, getItems } from '../../actions/actions';

const mapStateToProps = (state) => {
  const { feed, filters } = state;
  let filteredItems;
  if (filters.activeFilters.length) {
    filteredItems = feed.items.filter(i => filters.activeFilters.includes(i.type));
  }
  return {
    items: filteredItems ? filteredItems : feed.items,
    activeFilters: filters.activeFilters,
    isFetching: feed.isFetching
  }
};

const mapDispatchToProps = (dispatch) => ({
  onFilterToggle: (id) => dispatch(toggleFilter(id)),
  onButtonPress: () => dispatch(getItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
