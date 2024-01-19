import React, { createContext, useState } from 'react'

export const NoteProvide = createContext();

const DataProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);

    return (
        <NoteProvide.Provider value={{
            notes,
            setNotes
        }}>
            {children}
        </NoteProvide.Provider>
    )
}

export default DataProvider
