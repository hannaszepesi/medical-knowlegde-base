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
    if (response.status === 200) {
        return await response.json();
    }
}

export default function DiseaseTable() {
    const [diseases, setDiseases] = useState([])

    useEffect(() => {
        // eslint-disable-next-line no-unused-vars
        let cancelled = false;
        fetchDiseases().then((diseases) => {
            setDiseases(diseases)
        })

        function cleanUp() {
            cancelled = true;
        }

        return cleanUp;

    }, [])

    return (<CustomTable headCells={headCells} descriptionArrow={true} rows={diseases} name="disease"/>)

}

