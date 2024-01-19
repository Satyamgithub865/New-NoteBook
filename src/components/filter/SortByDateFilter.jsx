import React, { useContext } from 'react'
import { Button } from '@mui/material'
import { NoteProvide } from '../../context/DataProvider'

const SortByDateFilter = () => {
    const { notes, setNotes } = useContext(NoteProvide);

    const handleClick = () => {
        const sortedNotes = notes?.sort((a, b) => b.date - a.date);

        setNotes(sortedNotes);
    }
    return (
        <>
            <Button
                variant='contained'
                style={{ marginLeft: 20, textTransform: 'none' }}
                onClick={handleClick}
            >
                Sort Notes By Date
            </Button>
        </>
    )
}

export default SortByDateFilter
