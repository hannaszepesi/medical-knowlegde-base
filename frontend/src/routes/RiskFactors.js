import * as React from "react";
import CustomTable from "../components/CustomTable";
import {useEffect, useState} from "react";

export default function RiskFactors() {

    const headCells = [{
        id: 'name', label: 'Name',
    }, {
        id: 'description', label: 'Description',
    }];

    const fetchRiskFactors = async () => {
        const response = await (fetch("/risk-factors/get-all"));
        return await response.json();
    }

    const [riskFactors, setRiskFactors] = useState([])

    useEffect(() => {
        fetchRiskFactors().then((riskFactors) => {
            setRiskFactors(riskFactors)
        })
    }, [])

    return (<CustomTable headCells={headCells} descriptionArrow={false} rows={riskFactors} name="risk factor"/>)

}