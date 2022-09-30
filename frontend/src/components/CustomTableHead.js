import * as React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const CustomTableHead = (props) => {

    const {headCells, descriptionArrow} = props

    return (<TableHead>
        <TableRow>
            {descriptionArrow === true ? <TableCell
                key={"description" + headCells.id}
            >
            </TableCell> : ""}
            {headCells.map((headCell) => (<TableCell align="center" sx={{color: "primary", fontWeight: "bold"}}
                                                     key={headCell.id}
            >
                {headCell.label}
            </TableCell>))}
            <TableCell></TableCell>
            <TableCell></TableCell>
        </TableRow>
    </TableHead>);

};

export default CustomTableHead;