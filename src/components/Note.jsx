import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Note ({id, title, content, deleteNote}){
    return( 
        <div className="note">
            <h1 >{title}</h1>
            <p >{content}</p>
            <button onClick={()=>deleteNote(id)}> <DeleteForeverIcon /> </button>
        </div>
    );
}

export default Note;