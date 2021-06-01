import SortModule from './SortModule'
import SearchModule from './SearchModule'
import '../css/SearchBar.css';

const SearchBar = ({ onSearch, onSort, sortBy, setSortBy, sortOrder, setSortOrder }) => {
    return (
        <div className='search-bar'>
            <SearchModule onSearch={onSearch} />
            <SortModule onSort={onSort} setSortBy={setSortBy} sortBy={sortBy} sortOrder={sortOrder} setSortOrder={setSortOrder}/>
        </div>
    )
}

export default SearchBar
