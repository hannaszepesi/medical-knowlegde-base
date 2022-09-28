import * as React from 'react';
import CustomTable from "./CustomTable";


function createData(name, symptoms, riskFactors) {
    return {
        name, symptoms, riskFactors
    };
}

const rows = [createData('Diabetes1', ['headache', 'dizziness', 'headache', 'dizziness'], ['headache', 'dizziness', 'headache', 'dizziness']), createData('Diabetes2', ['headache', 'dizziness', 'headache', 'dizziness'], ['headache', 'dizziness', 'headache', 'dizziness']), createData('Diabetes3', ['headache', 'dizziness', 'headache', 'dizziness'], ['headache', 'dizziness', 'headache', 'dizziness']), createData('Diabetes4', ['headache', 'dizziness', 'headache', 'dizziness'], ['headache', 'dizziness', 'headache', 'dizziness']), createData('Diabetes5', ['headache', 'dizziness', 'headache', 'dizziness'], ['headache', 'dizziness', 'headache', 'dizziness']), createData('Diabetes6', ['headache', 'dizziness', 'headache', 'dizziness'], ['headache', 'dizziness', 'headache', 'dizziness']), createData('Diabetes7', ['headache', 'dizziness', 'headache', 'dizziness'], ['headache', 'dizziness', 'headache', 'dizziness']), createData('Diabetes8', ['headache', 'dizziness', 'headache', 'dizziness'], ['headache', 'dizziness', 'headache', 'dizziness']),];

const headCells = [{
    id: 'name', label: 'Name',
}, {
    id: 'symptoms', label: 'Symptoms',
}, {
    id: 'riskFactors', label: 'Risk factors',
}];

export default function DiseaseTable() {

    return (<CustomTable headCells={headCells} descriptionArrow={true} rows={rows} name="Diseases"/>)

}

