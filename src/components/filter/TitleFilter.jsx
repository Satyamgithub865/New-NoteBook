import { TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { NoteProvide } from '../../context/DataProvider'

const TitleFilter = () => {
    const [title, setTitle] = useState('');
    const { notes, setNotes } = useContext(NoteProvide);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("Notes"));
        if (data) {
            setNotes(data);
        }
        const filteredData = notes.filter(note => note.title.toLowerCase().includes(title.toLowerCase()));
        setNotes(filteredData);
    }, [title])

    return (
        <>
            <TextField
                onChange={(e) => setTitle(e.target.value)}
                placeholder='enter title to search...'
                style={{ marginLeft: 20 }}
            />
        </>
    )
}

export default TitleFilter
