import * as React from "react";
import CustomTable from "../components/CustomTable";
import { useState } from "react";
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

  useInitialData(setRiskFactors, () => getData("/risk-factors/get-all"));

  return (
    <CustomTable
      headCells={headCells}
      descriptionArrow={false}
      rows={riskFactors}
      name="risk factor"
    />
  );
}
