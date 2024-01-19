import { Box, Typography, styled, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { formatDate } from '../../utils/common-utils'


const DialogStyle = {
    width: '60%',
    height: '80%',
    backgroundColor: '#e6f7ff'
}

const DateContainer = styled(Box)`
    display: flex;
    align-items: center;
`

const UpdatedDate = styled(Typography)`
    font-size: 10px;
    font-weight: 600;
    color: #008ae6;
    margin-left: 8px;
`

const Date = styled(Typography)`
    font-size: 13px;
    font-weight: 600;
    color: #0080ff;
`

const CompleteView = ({ open, setOpen, note }) => {

    const handleClose = () => {
        console.log('closing dialog')
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            PaperProps={{ sx: DialogStyle }}
        >
            <DialogTitle id="alert-dialog-title">
                {note?.title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {note?.description}
                </DialogContentText>
            </DialogContent>
            <DialogActions style={{display: 'flex', justifyContent: 'space-between'}}>
                <DateContainer>
                    <Date>{formatDate(note?.date)}</Date>
                    {
                        note?.updatedDate && <UpdatedDate>(Last updated: {formatDate(note.updatedDate)})</UpdatedDate>
                    }
                </DateContainer>
                <Button onClick={handleClose} autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>

    );
}

export default CompleteView;