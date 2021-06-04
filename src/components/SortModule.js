// import { useEffect } from 'react';

const SortModule = ({ onSort, sortBy, setSortBy, sortOrder, setSortOrder }) => {
    // useEffect(() => { //Do the sort everytime sortBy and sortOrder changes
    //     onSort(sortBy, sortOrder);
    // }, [sortBy, sortOrder]);

    return (
        <div className='sort-module'>
            <div className='sort-module-control'>
                <label className='sort-module-label'>Sort by</label>
                <select onChange={(e) => {
                    let attr = "";
                    if (e.target.value === "Project Name") {
                        attr = "projectName";
                    }
                    else {
                        attr = "startDate";
                    }
                    setSortBy(attr);
                }
                }>
                    <option>Project Name</option>
                    <option>Start Date</option>
                </select>
            </div>
            <div className='sort-module-control'>
                <label className='sort-module-label'>Sort order</label>
                <select onChange={(e) => {
                    let attr = "";
                    if (e.target.value === "Ascending") {
                        attr = "ascending";
                    }
                    else {
                        attr = "descending";
                    }
                    setSortOrder(attr);
                }}>
                    <option>Ascending</option>
                    <option>Descending</option>
                </select>
            </div>

        </div>

    )
}

export default SortModule
