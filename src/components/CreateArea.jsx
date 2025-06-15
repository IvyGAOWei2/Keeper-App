import React, { useState } from "react";

function CreateArea( {addNote}) {
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


    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="title" placeholder="Title" value={form.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3"  value={form.content}/>
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
