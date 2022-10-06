import * as React from "react";
import CustomTable from "../components/CustomTable";
import { useCallback, useState } from "react";
import { getData, useInitialData } from "../components/Util";

const headCells = [
  {
    id: "name",
    label: "Name",
  },
  {
    id: "symptoms",
    label: "Symptoms",
  },
  {
    id: "riskFactors",
    label: "Risk factors",
  },
];

export default function DiseaseTable() {
  const [diseases, setDiseases] = useState([]);

  const fetchMethod = useCallback(() => getData("/diseases/get-all"), []);

  useInitialData(setDiseases, fetchMethod);

  return (
    <CustomTable
      headCells={headCells}
      descriptionArrow={true}
      rows={diseases}
      name="disease"
    />
  );
}
