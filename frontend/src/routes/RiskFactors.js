import * as React from "react";
import CustomTable from "../components/CustomTable";
import {useCallback, useState} from "react";
import { getData, useInitialData } from "../components/Util";

export default function RiskFactors() {
  const headCells = [
    {
      id: "name",
      label: "Name",
    },
    {
      id: "description",
      label: "Description",
    },
  ];

  const [riskFactors, setRiskFactors] = useState([]);

  const getRiskFactors = useCallback(() => getData("/risk-factors/get-all"), []);

  useInitialData(setRiskFactors, getRiskFactors);

  return (
    <CustomTable
      headCells={headCells}
      descriptionArrow={false}
      rows={riskFactors}
      name="risk factor"
    />
  );
}
