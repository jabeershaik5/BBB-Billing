import React, { useRef, useState } from 'react';
import './css/cards.css'

import useAddToDb from '../hooks/useAddToDb';

const UpdateMenu = () => {
    
    const {addToDb, loading, error } = useAddToDb();
    const [fileContents, setFileContents] = useState(null);
    const resId = useRef(null);

    const handleChange=(e)=>{
        const file = e.target.files[0];

        if(!file) return

        if(!file.name.endsWith('.json')) return 

        const reader = new FileReader();

        reader.onload = ()=>{
            try {
                const parsedData = JSON.parse(reader.result);
                setFileContents(parsedData);
            } catch (err) {
                alert('Something went wrong')
            }
        };
        reader.readAsText(file);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!fileContents){
            alert('Please Select a file');
            return
        }
        addToDb(fileContents.menu, resId.current.value); //hook func to add to the database.
        resId.current.value='';
    }

  return (
    <div className='update-menu-page' onSubmit={handleSubmit}>
        <form action="" className='menu-form'>
            <p className='menu-form-title'>ADD MENU</p>
            <div className="form-input">
                <label htmlFor="resId">Restaurant ID</label>
                <input type="text" className="input" id="resId" ref={resId} />
            </div>
            <div className="form-input">
                <label htmlFor="file" className='custom-file'>Select a file</label>
                <input type="file" className="input file-inp" id="file" accept='.json' onChange={handleChange}  />
            </div>
            {loading&& <p>Loading...</p>}
            {error && <p>error</p>}
            <button className='update-menu-btn'>Add Item</button>
        </form>
    </div>
  )
}

export default UpdateMenu