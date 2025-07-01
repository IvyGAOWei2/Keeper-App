import React, { useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { TextField, IconButton, Box } from '@mui/material';

function Note ({id, title, content, deleteNote, updateNote}){
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState({ title, content });

    function handleEditChange(e) {
        const { name, value } = e.target;
        setEditForm(prev => ({ ...prev, [name]: value }));
    }

    function handleEditSubmit(e) {
        e.preventDefault();
        updateNote(id, editForm);
        setIsEditing(false);
    }

    function handleStartEdit() {
        setEditForm({ title, content }); // 保证每次编辑时内容是最新的
        setIsEditing(true);
    }

    return( 
        <div className="note" style={{ position: 'relative' }}>
            {isEditing ? (
                <form onSubmit={handleEditSubmit}>
                    <TextField
                        name="title"
                        value={editForm.title}
                        onChange={handleEditChange}
                        variant="standard"
                        fullWidth
                        margin="dense"
                        placeholder="标题"
                    />
                    <TextField
                        name="content"
                        value={editForm.content}
                        onChange={handleEditChange}
                        variant="standard"
                        fullWidth
                        margin="dense"
                        multiline
                        minRows={2}
                        placeholder="内容"
                        sx={{ mt: 1 }}
                    />
                    <Box display="flex" justifyContent="flex-end" mt={1} gap={1}>
                        <IconButton type="submit" color="primary" size="small"><SaveIcon /></IconButton>
                        <IconButton type="button" color="secondary" size="small" onClick={() => setIsEditing(false)}><CancelIcon /></IconButton>
                    </Box>
                </form>
            ) : (
                <>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <h1 style={{ margin: 0, fontSize: '1.2em' }}>{title}</h1>
                        <IconButton onClick={handleStartEdit} size="small"><EditIcon fontSize="small" /></IconButton>
                    </Box>
                    <p style={{ minHeight: 32 }}>{content}</p>
                    <Box display="flex" justifyContent="flex-end">
                        <IconButton onClick={() => deleteNote(id)} size="small"><DeleteForeverIcon /></IconButton>
                    </Box>
                </>
            )}
        </div>
    );
}

export default Note;