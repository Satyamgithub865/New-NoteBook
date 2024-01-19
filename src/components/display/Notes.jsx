import React, { useContext, useEffect, useState } from 'react'
import { Grid, Pagination, Box, styled } from '@mui/material'
import Note from './Note';
import { NoteProvide } from '../../context/DataProvider';

const Container = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px; 
`;

const EmptyNotes = styled('h1')({
    textAlign: 'center',
    width: '100%',
    color: 'GrayText',
    padding: 20
})

const Notes = () => {
    const { notes } = useContext(NoteProvide);
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const [currentNotes, setCurrentNotes] = useState([]);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const current = notes.slice(startIndex, endIndex);
        setCurrentNotes(current);
    }, [notes])

    return (
        <>
            <Grid container spacing={2} >
                {
                    !notes.length ? <EmptyNotes>Add some notes to display...</EmptyNotes> :
                        currentNotes.map((note, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
                                <Note note={note} />
                            </Grid>
                        ))
                }
            </Grid>
            <Container>
                <Pagination
                    count={Math.ceil(notes.length / itemsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                />
            </Container>
        </>
    )
}

export default Notes
