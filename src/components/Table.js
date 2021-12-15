import React, { useState } from 'react';

import { useSelector } from "react-redux";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@material-ui/core';
import AddForm from './form/add'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const TableCell = () => {
  const [open, setOpen] = useState(false);

  const _issue = useSelector(state => state.issue);

  const handleOpen = () => setOpen(true);
  const handleClose = (e) => {
    e.stopPropagation();
    console.log("🧑🏿‍🌾");
    setOpen(!open);
  };

  console.log(open)

  return(
    <Table className="table" basic='very'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell className="table-header id">id</Table.HeaderCell>
          <Table.HeaderCell className="table-header title">Title</Table.HeaderCell>
          <Table.HeaderCell className="table-header status">Status</Table.HeaderCell>
          <Table.HeaderCell className="table-header url">Url</Table.HeaderCell>
          <Table.HeaderCell className="table-header create">Created at</Table.HeaderCell>
          <Table.HeaderCell className="table-header update">Updated at</Table.HeaderCell>
          <Table.HeaderCell className="table-header add">
            <IconButton onClick={handleOpen}>
              <AddIcon className="add-icon"/>
              <Modal
                open={open}
                // onClose={handleClose}
                // aria-labelledby="modal-modal-title"
                // aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <AddForm handleClose={handleClose}/>
                </Box>
              </Modal>
            </IconButton>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
        {_issue.map((item, index) => (
          <Table.Row>
            <Table.Cell>{item.id}</Table.Cell>
            <Table.Cell>{item.title}</Table.Cell>
            <Table.Cell>{item.state}</Table.Cell>
            <Table.Cell>{item.url}</Table.Cell>
            <Table.Cell>{item.create}</Table.Cell>
            <Table.Cell>{item.update}</Table.Cell>
            <Table.Cell>
              <IconButton>
                <EditIcon className="edit-icon"/>
              </IconButton>
              <IconButton>
                <DeleteIcon className="delete-icon"/>
              </IconButton>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
)}
  
  export default TableCell


