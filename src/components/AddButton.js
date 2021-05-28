const AddButton = ({ onToggle, txtChange }) => {
    return <button className='btn' onClick={() => onToggle()} style={txtChange ? {backgroundColor: "red"} : {backgroundColor: "green"}}>{txtChange ? "Close" : "Add"}</button>
}

export default AddButton
