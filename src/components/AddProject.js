import { useState } from 'react';
import '../css/AddProject.css';

const AddProject = ({ onAdd, onToggle }) => {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [des, setDes] = useState('');
    const [startD, setStartD] = useState('');
    const [endD, setEndD] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd({
            projectName: name,
            projectIdentifier: id,
            description: des,
            startDate: startD,
            endDate: endD
        });
    }

    return (
        <form className='add-form' onSubmit={(e) => {
            onSubmit(e);
            onToggle();
        }}>
            <div className='project-title'>
                <div className='form-control form-control-name'>
                    <label>Peoject Name</label>
                    <input type='text' placeholder='Add Project Name' value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className='form-control form-control-id'>
                    <label>Project ID</label>
                    <input type='text' placeholder='ID' value={id} onChange={(e) => setId(e.target.value)}></input>
                </div>
            </div>
            <div className='form-control'>
                <label>Description</label>
                <textarea rows="4" cols="50" placeholder='Descriptions About The Project' value={des} onChange={(e) => setDes(e.target.value)}></textarea>
            </div>
            <div className='date-form'>
                <div className='form-control'>
                    <label>Start Day</label>
                    <input type='date' value={startD} onChange={(e) => setStartD(e.target.value)}></input>
                </div>
                <div className='form-control'>
                    <label>End Day</label>
                    <input type='date' value={endD} onChange={(e) => setEndD(e.target.value)}></input>
                </div>
            </div>

            <input type="submit" value='Save' className='btn btn-add'></input>
        </form>
    )
}

export default AddProject
