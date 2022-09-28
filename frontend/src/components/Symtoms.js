import * as React from "react";
import CustomTable from "./CustomTable";

export default function Symptoms() {

    function createData(name, description) {
        return {
            name, description
        };
    }

    const rows = [createData('Diabetes1', ['hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh']),
        createData('Diabetes2', ['hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh']),
        createData('Diabetes3', ['hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh']),
        createData('Diabetes4', ['hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh']),
        createData('Diabetes5', ['hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh']),
        createData('Diabetes6', ['hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh']),
        createData('Diabetes7', ['hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh']),
        createData('Diabetes8', ['hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'])]

    const headCells = [{
        id: 'name', label: 'Name',
    }, {
        id: 'description', label: 'Description',
    }];

    return (<CustomTable headCells={headCells} descriptionArrow={false} rows={rows} name="Symptoms"/>)

}