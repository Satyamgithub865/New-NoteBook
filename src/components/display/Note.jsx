import React, { useContext, useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { MoreVert, Delete } from '@mui/icons-material'
import { NoteProvide } from '../../context/DataProvider'
import AddNoteDialog from '../notes/AddNoteDialog'
import { formatDate, Ellipsis } from '../../utils/common-utils'
import CompleteView from './CompleteView'

const Container = styled(Box)`
    border: 1px solid rgb(153, 204, 255);
    height: 300px;
    border-radius: 8px;
    transition: box-shadow 0.3s ease;
    &:hover {
        box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.3);
    };
`

const Header = styled(Box)`
    display: flex;
    padding: 8px;
    justify-content: space-between;
    background-color: rgb(153, 204, 255);
    border-radius: 8px 8px 0px 0px;
    & > p {
        font-size: 15px;
        font-family: cursive;
    }
`

const Content = styled(Box)`
    height: 68%;
    padding: 8px;
    & > p {
        font-size: 15px;
        color: grey;
    };
    background-color: #e6eeff;
    cursor: pointer;
`

const Footer = styled(Box)`
    display: flex;
    padding: 8px;
    justify-content: space-between;
    background-color: rgb(153, 204, 255);
    border-radius: 0px 0px 8px 8px;
`

const DeleteIcon = styled(Delete)`
    color: red;
    margin-right: 8px;
    cursor: pointer;
`

const Date = styled(Typography)`
    font-size: 13px;
    font-weight: 600;
    color: #0080ff;
`

const UpdatedDate = styled(Typography)`
    font-size: 10px;
    font-weight: 600;
    color: #008ae6;
    margin-left: 8px;
`

const DateContainer = styled(Box)`
    display: flex;
    align-items: center;
`

const Note = ({ note }) => {
    const { setNotes } = useContext(NoteProvide);
    const [openDialog, setOpenDialog] = useState(false);
    const [openCompleteView, setOpenCompleteView] = useState(false);

    const deleteNote = () => {
        const data = localStorage.getItem("Notes");
        if (data) {
            const parsedData = JSON.parse(data);
            const newData = parsedData.filter((elm) => elm.id !== note.id);
            localStorage.setItem("Notes", JSON.stringify(newData));
            setNotes(newData);
        }
    }

    const openEditDialog = () => {
        setOpenDialog(true);
    }

    const openCompleteViewDialog = () => {
        setOpenCompleteView(true);
    }

    return (
        <Container>
            <Header>
                <Typography>{Ellipsis(note?.title, 30)}</Typography>
                <MoreVert onClick={() => openEditDialog()} style={{ cursor: 'pointer' }} />
            </Header>
            <Content onClick={openCompleteViewDialog}>
                <Typography>{Ellipsis(note?.description, 300)}</Typography>
            </Content>
            <Footer>
                <DateContainer>
                    <Date>{formatDate(note?.date)}</Date>
                    {
                        note?.updatedDate && <UpdatedDate>(Last updated: {formatDate(note.updatedDate)})</UpdatedDate>
                    }
                </DateContainer>
                <DeleteIcon onClick={() => deleteNote()} />
            </Footer>
            <CompleteView open={openCompleteView} setOpen={setOpenCompleteView} note={note} />
            <AddNoteDialog open={openDialog} setOpen={setOpenDialog} note={note} />
        </Container>
    )
}

export default Note
