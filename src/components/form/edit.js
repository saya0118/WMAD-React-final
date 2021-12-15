// import React from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import issueReducers from '../redux/reducer';
// import * as types from './actionType'

// const getIssues = (issue) => ({
//     type: types.GET_ISSUES,
//     payload: issueReducers,
// })

// export default getIssues;

const EditForm = () => {
    return(
        <div className="edit-form">
            <Box className="form-container"
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                <h3></h3>
                <TextField
                    id="standard-password-input"
                    label="Id *"
                    type="id"
                    autoComplete="current-password"
                    variant="standard"
                />
                <TextField
                    id="standard-password-input"
                    label="Title *"
                    type="title"
                    autoComplete="current-password"
                    variant="standard"
                />
                <TextField
                    id="standard-password-input"
                    label="State *"
                    type="state"
                    autoComplete="current-password"
                    variant="standard"
                />
                <TextField
                    id="standard-password-input"
                    label="Url"
                    type="url"
                    autoComplete="current-password"
                    variant="standard"
                />
                <TextField
                    id="standard-password-input"
                    label="Created at"
                    type=""
                    autoComplete="current-password"
                    variant="standard"
                />
                <TextField
                    id="standard-password-input"
                    label="Updated at"
                    type=""
                    autoComplete="current-password"
                    variant="standard"
                />
                 <Stack spacing={2} direction="row">
                    <Button className="button save"variant="text">Save</Button>
                    <Button className="button cancel" variant="text">Cancel</Button>
                </Stack>
            </Box>
        </div>
    )
}

export default EditForm;