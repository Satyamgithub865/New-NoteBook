import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
    return (
        <AppBar position='static' style={{backgroundColor: '#3377ff'}}>
            <Toolbar>
                <Typography style={{fontSize: '20px', fontFamily: 'revert'}}>My NoteBook App</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
