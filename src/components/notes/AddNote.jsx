import React, { useState } from 'react'
import { Box, Button, styled } from '@mui/material'
import AddNoteDialog from './AddNoteDialog'
import TitleFilter from '../filter/TitleFilter';
import SortByDateFilter from '../filter/SortByDateFilter';

const Container = styled(Box)`
    width: 70%;
    margin-left: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

const AddNote = () => {
    const [open, setOpen] = useState(false);
    const handleDialog = () => {
        setOpen(true);
    }

    return (
        <Box style={{ marginBottom: 20, display: 'flex', gap: 2 }}>
            <Button variant='contained' color='secondary' onClick={handleDialog}>Add Your Note</Button>
            <Container>
                <TitleFilter />
                <SortByDateFilter />
            </Container>
            <AddNoteDialog open={open} setOpen={setOpen} />
        </Box>
    )
}

export default AddNote
