import React, { useContext, useEffect } from 'react'
import AddNote from './notes/AddNote'
import Notes from './display/Notes'
import { NoteProvide } from '../context/DataProvider'

const Home = () => {

    const { setNotes } = useContext(NoteProvide);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("Notes"));
        if (data) {
            setNotes(data);
        }
    }, []);

    return (
        <>
            <AddNote />
            <Notes />
        </>
    )
}

export default Home
