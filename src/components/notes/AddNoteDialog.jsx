import { Dialog } from '@mui/material'
import React from 'react'
import AddNoteForm from './AddNoteForm';

const DialogStyle = {
  width: '60%',
  height: '80%',
  backgroundColor: '#e6eeff'
}

const AddNoteDialog = ({ open, setOpen, note }) => {
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: DialogStyle }}
    >
      <AddNoteForm setOpen={setOpen} note={note} />
    </Dialog>
  )
}

export default AddNoteDialog
