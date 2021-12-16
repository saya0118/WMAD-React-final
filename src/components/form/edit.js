// import React from 'react';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from "react-redux";

import { editItem } from "../../redux/action"
// import issueReducers from '../redux/reducer';
// import * as types from './actionType'

// const getIssues = (issue) => ({
//     type: types.GET_ISSUES,
//     payload: issueReducers,
// })

// export default getIssues;


const EditForm = (props) => {

    const [ textId, setTextId ] = useState("");
    const [ textTitle, setTextTitle ] = useState("");
    const [ textState, setTextState ] = useState("");
    const [ textUrl, setTextUrl ] = useState("");
    const [ textCreate, setTextCreate ] = useState("");
    const [ textUpdate, setTextUpdate ] = useState("");

    // const _issue = useSelector(state => state.issue)
    const dispatch = useDispatch();

    useEffect(() => {
        setTextId(props.item?.id);
        setTextTitle(props.item?.title);
        setTextState(props.item?.state);
        setTextUrl(props.item?.url);
        setTextCreate(props.item?.create);
        setTextUpdate(props.item?.update);
    }, [props]);

    const onChangeId = (e) => {
        const text = e.target.value;
        setTextId(text);
    }

    const onChangeTitle = (e) => {
        const text = e.target.value;
        setTextTitle(text);
    }
    
    const onChangeState = (e) => {
        const text = e.target.value;
        setTextState(text);
    }
    
    const onChangeUrl = (e) => {
        const text = e.target.value;
        setTextUrl(text);
    }

    const onChangeCreate = (e) => {
        const text = e.target.value;
        setTextCreate(text);
    }

    const onChangeUpdate = (e) => {
        const text = e.target.value;
        setTextUpdate(text);
    }

    const onSubmit = (e) => {
        let data = {
            id: textId,
            title: textTitle,
            state: textState,
            url: textUrl,
            create: textCreate,
            update: textUpdate
        }

        dispatch(editItem(data));
        props.handleEditClose(e);
    };

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
                <TextField
                    id="standard-password-input"
                    label="Id *"
                    type="id"
                    autoComplete="current-password"
                    variant="standard"
                    onChange={onChangeId}
                    value={textId}
                    disabled={true}
                />
                <TextField
                    id="standard-password-input"
                    label="Title *"
                    type="title"
                    autoComplete="current-password"
                    variant="standard"
                    onChange={onChangeTitle}
                    value={textTitle}
                />
                <TextField
                    id="standard-password-input"
                    label="State *"
                    type="state"
                    autoComplete="current-password"
                    variant="standard"
                    onChange={onChangeState}
                    value={textState}
                />
                <TextField
                    id="standard-password-input"
                    label="Url"
                    type="url"
                    autoComplete="current-password"
                    variant="standard"
                    onChange={onChangeUrl}
                    value={textUrl}
                />
                <TextField
                    id="standard-password-input"
                    label="Created at"
                    type=""
                    autoComplete="current-password"
                    variant="standard"
                    onChange={onChangeCreate}
                    value={textCreate}
                />
                <TextField
                    id="standard-password-input"
                    label="Updated at"
                    type=""
                    autoComplete="current-password"
                    variant="standard"
                    onChange={onChangeUpdate}
                    value={textUpdate}
                />
                 <Stack spacing={2} direction="row">
                    <Button className="button save"variant="text" onClick={onSubmit}>Save</Button>
                    <Button className="button cancel" variant="text" onClick={props.handleEditClose}>Cancel</Button>
                </Stack>
            </Box>
        </div>
    )
}

export default EditForm;