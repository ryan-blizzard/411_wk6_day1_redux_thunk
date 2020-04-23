import React from 'react'
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Container from '@material-ui/core/Container';

const Import = (props) => {
    // fill out this component
    console.log ('propsinimport', props)

    return (
        <Container>
        <p>Import Component</p>

        <Button onClick={props.fetchMakes} variant="contained" color="primary">
        Import</Button>

    <Table>
        <TableHead>
            <TableRow>
                <TableCell>
                id:
                </TableCell>
                <TableCell>
                make:
                </TableCell>
                <TableCell>
                action:
                </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {props.makes.map(make => {
                
                return (
                <TableRow>
                    <TableCell>
                    {make.MakeId}
                    </TableCell>
                    <TableCell>
                    {make.MakeName}
                    </TableCell>
                    <TableCell>
                    DELETE
                    </TableCell>
                </TableRow>
                )
            })}
                
        </TableBody>
        </Table>

       






    </Container>
    )
}

export default Import