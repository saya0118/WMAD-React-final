import React from 'react';
import { Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@material-ui/core';

const TableCell = () => (
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
            <IconButton>
              <AddIcon className="add-icon"/>
            </IconButton>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
        <Table.Row>
          <Table.Cell>494514520</Table.Cell>
          <Table.Cell>PLATFORM_ID injection into custom decorators</Table.Cell>
          <Table.Cell>Open</Table.Cell>
          <Table.Cell>https://api.github.com/repos/angu</Table.Cell>
          <Table.Cell>2021/12/15</Table.Cell>
          <Table.Cell>2021/12/16</Table.Cell>
          <Table.Cell>
            <IconButton>
              <EditIcon className="edit-icon"/>
            </IconButton>
            <IconButton>
              <DeleteIcon className="delete-icon"/>
            </IconButton>
          </Table.Cell>
        </Table.Row>
       
      </Table.Body>
    </Table>
  )
  
  export default TableCell

