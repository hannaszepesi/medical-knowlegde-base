import * as React from "react";
import CustomTable from "../components/CustomTable";
import { useState } from "react";
import { getData, useInitialData } from "../components/Util";

export default function Symptoms() {
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

  const [symptoms, setSymptoms] = useState([]);

  useInitialData(setSymptoms, () => getData("/symptoms/get-all"));

  return (
    <CustomTable
      headCells={headCells}
      descriptionArrow={false}
      rows={symptoms}
      name="symptom"
    />
  );
}
