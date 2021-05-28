const SortModule = ({ onSortName, onReverse }) => {

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
                    onSortName(attr);
                }

                }>
                    <option >Project Name</option>
                    <option>Start Date</option>
                </select>
            </div>
            <div className='sort-module-control'>
                <label className='sort-module-label'>Sort order</label>
                <select onChange={onReverse}>
                    <option>Descending</option>
                    <option>Ascending</option>
                </select>
            </div>

        </div>

    )
}

export default SortModule
