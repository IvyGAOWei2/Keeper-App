import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Zoom from '@mui/material/Zoom';

function CreateArea( {addNote}) {
    const [isExpanded, setExpanded] = useState(false);
    const [form, setForm] = useState({title:"",
        content:""
    });

    function handleChange(event){
        const {name,value} = event.target;
        setForm (prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit (event){
        event.preventDefault();
        addNote(form);
        setForm({title:"",
        content:""
    });
        
    }

    function expand() {
      setExpanded(true);
    }


    
  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        {
          isExpanded && (
            <input onChange={handleChange} name="title" placeholder="Title" value={form.title}/>
          )
        }
        <textarea onClick={expand} 
          onChange={handleChange} 
          name="content" 
          placeholder="Take a note..." 
          rows={isExpanded?3:1}  
          value={form.content}/>

        <Zoom in={isExpanded}>
          <IconButton type="submit"> 
            <AddIcon />  
          </IconButton>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
