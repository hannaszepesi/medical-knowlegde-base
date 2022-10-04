import * as React from "react";
import CustomTable from "../components/CustomTable";
import {useState} from "react";
import {getData, SetInitialData} from "../components/Util";

export default function RiskFactors() {

    const headCells = [{
        id: 'name', label: 'Name',
    }, {
        id: 'description', label: 'Description',
    }];

    const [riskFactors, setRiskFactors] = useState([])

    SetInitialData(setRiskFactors, () => getData("/risk-factors/get-all"));

    return (<CustomTable headCells={headCells} descriptionArrow={false} rows={riskFactors} name="risk factor"/>)

}