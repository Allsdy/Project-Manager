const SearchModule = ({ onSearch }) => {
    return <input type='text' placeholder='Search' onChange={
        (e) => {
            onSearch(e.target.value);
        }
    }></input>
}

export default SearchModule
