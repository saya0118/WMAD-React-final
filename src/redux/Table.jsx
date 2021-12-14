import React from 'react';
import { Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const TableCell = () => (
    <Table basic='very'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>id</Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Url</Table.HeaderCell>
          <Table.HeaderCell>Created at</Table.HeaderCell>
          <Table.HeaderCell>Updated at</Table.HeaderCell>
          <Table.HeaderCell><AddIcon/></Table.HeaderCell>
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
            <EditIcon/>
            <DeleteIcon/>
          </Table.Cell>
        </Table.Row>
       
      </Table.Body>
    </Table>
  )
  
  export default TableCell

