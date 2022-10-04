import * as React from 'react';
import CustomTable from "../components/CustomTable";
import {useState} from "react";
import {getData, SetInitialData} from "../components/Util";

const headCells = [{
    id: 'name', label: 'Name',
}, {
    id: 'symptoms', label: 'Symptoms',
}, {
    id: 'riskFactors', label: 'Risk factors',
}];

export default function DiseaseTable() {
    const [diseases, setDiseases] = useState([])

    SetInitialData(setDiseases, () => getData("/diseases/get-all"));

    return (<CustomTable headCells={headCells} descriptionArrow={true} rows={diseases} name="disease"/>)

}

