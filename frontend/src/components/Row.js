import * as React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {Collapse} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EditModal from "./EditModal";
import Cells from "./Cells";

const Row = (props) => {
    const {row, descriptionArrow, name} = props;
    const [open, setOpen] = React.useState(false);


    return (<React.Fragment>
        <TableRow
            hover
            role="checkbox"
            tabIndex={-1}
            key={row.name}
        >{descriptionArrow === true ? <TableCell>
            <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
                title="View description"
            >
                {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
            </IconButton>
        </TableCell> : ""}
            <Cells row={row} name={name}/>
            <TableCell>
                <EditModal method="edit"/>
            </TableCell>

        </TableRow>
        {descriptionArrow === true ? <TableRow>
            <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{margin: 1}}>
                        <Typography variant="h6" gutterBottom component="div">
                            Description
                        </Typography>
                        <Typography variant="body1" gutterBottom component="div">
                            {row.description}
                        </Typography>
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow> : ""}
    </React.Fragment>)
}

export default Row;