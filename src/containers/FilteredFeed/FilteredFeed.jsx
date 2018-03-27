import { connect } from 'react-redux';
import Feed from '../../components/Feed/Feed';
import { toggleFilter } from '../../actions/actions';

const mapStateToProps = (state) => {
  const { feed, filters } = state;
  let filteredItems;
  if (filters.activeFilters.length) {
    filteredItems = feed.items.filter(i => filters.activeFilters.includes(i.type));
  }
  return {
    items: filteredItems ? filteredItems : feed.items
  }
};

const mapDispatchToProps = (dispatch) => ({
  onFilterToggle: (id) => dispatch(toggleFilter(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
