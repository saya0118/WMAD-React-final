import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const SearchBar = () => {
    return(
        <div className="search-bar">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            ></Box>
            <TextField className="search-box" id="standard-basic" label="Filter issues" variant="standard" />
        </div>
    )
}

export default SearchBar;