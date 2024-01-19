import React, { useContext, useState } from 'react'
import { Box, Button, InputBase, styled } from '@mui/material'
import { NoteProvide } from '../../context/DataProvider'
import { v4 as uuidv4 } from 'uuid';

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;
`

const Title = styled(InputBase)`
    background-color: #b3cbff;
    color: #000;
    width: 90%;
    padding: 10px;
    border-radius: 10px;
    margin: 10px 0px;
`

const Description = styled(InputBase)`
    background-color: #b3cbff;
    color: #000;
    width: 85%;
    padding: 10px;
    border-radius: 10px;
    margin: 10px 0px;
`

const StyledButton = styled(Button)`
    width: 100px;
    text-transform: none;
    margin-top: 10px;
`

const myNote = {
    title: '',
    description: '',
    date: Date.now(),
}

const AddNoteForm = ({ setOpen, note }) => {
    const [titleValue, setTitleValue] = useState(note?.title || '');
    const [descriptionValue, setDescriptionValue] = useState(note?.description || '');
    const [addNote, setAddNote] = useState({ ...myNote, id: note?.id || uuidv4(), title: titleValue, description: descriptionValue });
    const { setNotes } = useContext(NoteProvide);

    const handleChange = (e) => {
        setAddNote({ ...addNote, [e.target.name]: e.target.value });

        if (e.target.name === 'title') {
            setTitleValue(e.target.value);
        } else if (e.target.name === 'description') {
            setDescriptionValue(e.target.value);
        }
    }

    const addTheNote = () => {
        if (addNote.title || addNote.description) {
            const data = localStorage.getItem("Notes");

            if (data) {
                const parsedData = JSON.parse(data);
                const existingNoteIndex = parsedData.findIndex((note) => note.id === addNote.id);

                if (existingNoteIndex !== -1) {
                    const currentDate = Date.now();
                    parsedData[existingNoteIndex] = { ...addNote, date: note?.date, updatedDate: currentDate }
                } else {
                    parsedData.unshift(addNote);
                }

                localStorage.setItem("Notes", JSON.stringify(parsedData));
                setNotes(parsedData);
            } else {
                const arr = [addNote];
                localStorage.setItem("Notes", JSON.stringify(arr));
                setNotes(arr);
            }
        }

        setAddNote(myNote);
        setOpen(false);
    };


    return (
        <Container>
            <Title
                onChange={(e) => handleChange(e)}
                placeholder='Add title...'
                name='title'
                value={titleValue}
            />
            <Description
                onChange={(e) => handleChange(e)}
                placeholder='Add Description...'
                multiline
                rows={15}
                name='description'
                value={descriptionValue}
            />
            <StyledButton
                variant='contained'
                onClick={() => addTheNote()}
            >
                {(note) ? 'Edit' : 'Add'}
            </StyledButton>
        </Container>
    )
}

export default AddNoteForm
