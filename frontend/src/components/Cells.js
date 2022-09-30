import * as React from "react";
import TableCell from "@mui/material/TableCell";

const Cells = (props) => {
    const {row, name} = props;
    const labelId = `${row.name}`;

    return (<React.Fragment><TableCell
            id={labelId}
        >
            {row.name}
        </TableCell>
            {name === "disease" ? <React.Fragment><TableCell align="right">{row.symptoms.map(symptom => symptom.name).join(", ")}</TableCell>
                    <TableCell
                        align="right">{row.riskFactors.map(risk => risk.name).join(", ")}</TableCell></React.Fragment> :
                <TableCell align="right">{row.description}</TableCell>}
        </React.Fragment>
    )
}
export default Cells;