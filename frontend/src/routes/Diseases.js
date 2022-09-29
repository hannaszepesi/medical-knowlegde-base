import * as React from 'react';
import CustomTable from "../components/CustomTable";
import {useEffect, useState} from "react";

const headCells = [{
    id: 'name', label: 'Name',
}, {
    id: 'symptoms', label: 'Symptoms',
}, {
    id: 'riskFactors', label: 'Risk factors',
}];

const fetchDiseases = async () => {
    const response = await (fetch("/diseases/get-all"));
    return await response.json();
}


export default function DiseaseTable() {
    const [diseases, setDiseases] = useState([])

    useEffect(() => {
        fetchDiseases().then((diseases) => {
            setDiseases(diseases)
        })
    }, [])

    return (<CustomTable headCells={headCells} descriptionArrow={true} rows={diseases} name="disease"/>)

}

