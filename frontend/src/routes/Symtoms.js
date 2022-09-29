import * as React from "react";
import CustomTable from "../components/CustomTable";
import {useEffect, useState} from "react";

export default function Symptoms() {

    const headCells = [{
        id: 'name', label: 'Name',
    }, {
        id: 'description', label: 'Description',
    }];

    const fetchSymptoms = async () => {
        const response = await (fetch("/symptoms/get-all"));
        return await response.json();
    }

    const [symptoms, setSymptoms] = useState([])

    useEffect(() => {
        fetchSymptoms().then((symptoms) => {
            setSymptoms(symptoms)
        })
    }, [])

    return (<CustomTable headCells={headCells} descriptionArrow={false} rows={symptoms} name="symptom"/>)

}