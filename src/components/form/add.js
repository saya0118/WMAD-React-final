import React, {useState} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../redux/action';

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



const AddForm = (props) => {

    const [ id, setId ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ state, setState ] = useState('');
    const [ url, setUrl ] = useState('');
    const [ create, setCreate ] = useState('');
    const [ update, setUpdate ] = useState('');

    const [ idError, setIdError ] = useState(false);

    const _issue = useSelector(state => state.issue);
    const dispatch = useDispatch();

    console.log(_issue)

    const handleChangeId = (e) => {

        if (e.target.value.length === 0 ) setIdError(true);
        else setIdError(false);

        setId(e.target.value);
    }
    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleChangeState = (e) => {
        setState(e.target.value);
    }
    const handleChangeUrl = (e) => {
        setUrl(e.target.value);
    }
    const handleChangeCreate = (e) => {
        setCreate(e.target.value);
    }
    const handleChangeUpdate = (e) => {
        setUpdate(e.target.value);
    }


    const handleSave = () => {
        let data = {
            id,
            title,
            state,
            url,
            create,
            update
        }

        // Create Action (dispatching the data to Reducers)
        dispatch(addItem(data));

        // Execute a function in switch statement
        // Update Redux state
    }

    // const ore = (e) => {
    //     console.log(e.target.label)
    //     // switch(e.target.label) {
    //     //     case Id:
    //     //       break;
    //     //     case Title:
    //     //       break;
    //     //     case State:
    //     //         break;
    //     //     case Url:
    //     //         break;
    //     //     default:
    //     //   }
    // }


    return(
        <div className="add-form">
            <Box className="form-container"
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                <h3>Add new Issue</h3>
                <TextField
                    error={idError}
                    id="standard-password-input"
                    label="Id *"
                    type="id"
                    autoComplete="current-password"
                    variant="standard"
                    onChange={handleChangeId}
                />
                <TextField
                    error={idError}
                    id="standard-password-input"
                    label="Title *"
                    type="title"
                    autoComplete="current-password"
                    variant="standard"
                    onChange={handleChangeTitle}
                />
                <TextField
                    error={idError}
                    id="standard-password-input"
                    label="State *"
                    type="state"
                    autoComplete="current-password"
                    variant="standard"
                    onChange={handleChangeState}
                />
                <TextField
                    id="standard-password-input"
                    label="Url"
                    type="url"
                    autoComplete="current-password"
                    variant="standard"
                    onChange={handleChangeUrl}
                />
                <TextField
                    id="standard-password-input"
                    label="Created at"
                    type=""
                    autoComplete="current-password"
                    variant="standard"
                    onChange={handleChangeCreate}
                />
                <TextField
                    id="standard-password-input"
                    label="Updated at"
                    type=""
                    autoComplete="current-password"
                    variant="standard"
                    onChange={handleChangeUpdate}
                />
                 <Stack spacing={2} direction="row">
                    <Button onClick={handleSave} className="button save"variant="text">Save</Button>
                    <Button onClick={props.handleClose} className="button cancel" variant="text">Cancel</Button>
                </Stack>
            </Box>
        </div>
    )
}

export default AddForm;