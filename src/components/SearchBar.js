import SortModule from './SortModule'
import SearchModule from './SearchModule'
import '../css/SearchBar.css';

const SearchBar = ({ onSearch, onSortName, onReverse }) => {
    return (
        <div className='search-bar'>
            <SearchModule onSearch={onSearch} />
            <SortModule onSortName={onSortName} onReverse={onReverse}/>
        </div>
    )
}

export default SearchBar
