import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import * as React from "react";
import Paper from "@mui/material/Paper";
import TableToolbar from "./TableToolbar";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import Box from "@mui/material/Box";
import Row from "./Row"
import CustomTableHead from "./CustomTableHead";

const CustomTable = (props) => {

    const {headCells, descriptionArrow, rows, name} = props

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (<Box sx={{width: '100%', maxWidth: 900, padding: 10}}>
        <Paper sx={{width: '100%', mb: 2}}>
            <TableToolbar name={name}/>
            <TableContainer>
                <Table
                    sx={{minWidth: 750, minHeight: 500}}
                    aria-labelledby="tableTitle"
                >
                    <CustomTableHead headCells={headCells} descriptionArrow={descriptionArrow}
                    />
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return <Row key={row.name} row={row} descriptionArrow={descriptionArrow} name={name}/>
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onRowsPerPageChange={handleChangeRowsPerPage}
                onPageChange={handleChangePage}
            />
        </Paper>
    </Box>);

};

export default CustomTable;