import AddButton from './AddButton';
import '../css/Header.css';

const Header = ({ onToggle, txtChange }) => {
    return (
        <div className='header'>
            <h1>Project Manager</h1>
            <AddButton onToggle={onToggle} txtChange={txtChange}/>
        </div>
    )
}

export default Header
