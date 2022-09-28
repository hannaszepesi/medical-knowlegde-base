import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import EditModal from "./EditModal";
import * as React from "react";

const TableToolbar = (props) => {

    const {name} = props

    return (
        <Toolbar>
            <Typography
                color="primary"
                fontSize="x-large"
                sx={{flex: '1 1 100%',
                fontWeight: "bold",
                font: "monospace"}}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                {name}
            </Typography>
            <EditModal method="new"/>
        </Toolbar>
    );
};

export default TableToolbar;