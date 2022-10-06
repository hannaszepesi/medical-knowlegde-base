import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { Autocomplete, Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/AddCircleOutline";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { getData, handleDelete, useInitialData } from "./Util";
import { sendDataForServer } from "./Util";
import { modalStyle } from "./Style";

export default function EditModal(props) {
  const { method, name, row } = props;

  const [open, setOpen] = React.useState(false);

  const [riskFactorsList, setRiskFactorsList] = React.useState([]);
  const [symptomsList, setSymptomsList] = React.useState([]);

  const rowId = method === "edit" ? row.id : "";
  const [rowName, setRowName] = React.useState(
    method === "edit" ? row.name : ""
  );
  const [description, setDescription] = React.useState(
    method === "edit" ? row.description : []
  );
  const [riskFactors, setRiskFactors] = React.useState(
    method === "edit" ? row.riskFactors : []
  );
  const [symptoms, setSymptoms] = React.useState(
    method === "edit" ? row.symptoms : ""
  );

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const submitNew = async (tableName, payload) => {
    sendDataForServer(
      `/${tableName.replace(" ", "-") + "s"}/add`,
      payload,
      "POST"
    ).then(() => console.log("ok"));
    window.location.reload();
  };

  const submitEdit = async (tableName, payload, id) => {
    sendDataForServer(
      `/${tableName.replace(" ", "-") + "s"}/update/${id}`,
      payload,
      "PUT"
    ).then(() => console.log("ok"));
    window.location.reload();
  };

  const handleSubmit = async (tableName, payload, id) => {
    if (method === "edit") {
      await submitEdit(tableName, payload, id);
    } else {
      await submitNew(tableName, payload);
    }
  };

  useInitialData(setSymptomsList, () => getData("/symptoms/get-all"));

  useInitialData(setRiskFactorsList, () => getData("/risk-factors/get-all"));

  const getDataFromInput = (sampleObject, newValue) => {
    let newArray = [];
    for (let i = 0; i < newValue.length; i++) {
      newArray.push(sampleObject.find((r) => r.name === newValue[i]));
    }
    return newArray;
  };

  const payloadGenerator = (tableName) => {
    if (tableName === "disease") {
      return {
        name: rowName,
        description: description,
        symptoms: symptoms,
        riskFactors: riskFactors,
      };
    } else {
      return {
        name: rowName,
        description: description,
      };
    }
  };

  const nameInput = () => {
    return (
      <TextField
        sx={{ margin: 2, maxWidth: 300 }}
        id="name-input"
        label="Name"
        onChange={(event) => {
          setRowName(event.target.value);
        }}
        value={rowName}
      />
    );
  };

  const risksInput = () => {
    return (
      <Box display="flex">
        <Autocomplete
          sx={{ padding: 2, width: 300 }}
          multiple
          id="tags-risk-factors"
          options={riskFactorsList.map((riskFactor) => riskFactor.name)}
          filterSelectedOptions
          onChange={(event, newValue) => {
            setRiskFactors(getDataFromInput(riskFactorsList, newValue));
          }}
          defaultValue={
            method === "edit"
              ? riskFactors.map((riskFactor) => riskFactor.name)
              : []
          }
          renderInput={(params) => (
            <TextField {...params} label="Risk factors" />
          )}
        />
        <IconButton
          title="Add new risk factor"
          component={Link}
          to={"/risk-factors"}
        >
          <AddIcon color="primary" />
        </IconButton>
      </Box>
    );
  };

  const symptomsInput = () => {
    return (
      <Box display="flex">
        <Autocomplete
          sx={{ padding: 2, width: 300 }}
          multiple
          id="tags-symptoms"
          options={symptomsList.map((symptom) => symptom.name)}
          filterSelectedOptions
          onChange={(event, newValue) => {
            setSymptoms(getDataFromInput(symptomsList, newValue));
          }}
          defaultValue={
            method === "edit" ? symptoms.map((symptom) => symptom.name) : []
          }
          renderInput={(params) => <TextField {...params} label="Symptoms" />}
        />
        <IconButton title="Add new symptom" component={Link} to={"/symptoms"}>
          <AddIcon color="primary" />
        </IconButton>
      </Box>
    );
  };

  const descriptionInput = () => {
    return (
      <TextField
        sx={{ margin: 2 }}
        id="description-input"
        label="Description"
        multiline
        rows={4}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
        value={description}
      />
    );
  };

  return (
    <React.Fragment>
      {method === "edit" ? (
        <IconButton title={"Edit " + name} onClick={handleOpen} color="primary">
          <EditIcon />
        </IconButton>
      ) : (
        <Tooltip title={"Add new " + name}>
          <Button
            onClick={handleOpen}
            variant="contained"
            endIcon={<AddIcon />}
          >
            new
          </Button>
        </Tooltip>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              padding={2}
              color="primary"
              id="modal-modal-title"
              variant="h4"
              component="h2"
            >
              {method === "edit" ? "Edit" : "Add new"} {name}
            </Typography>
            {method === "edit" ? (
              <Button
                onClick={() => handleDelete(name, row.id)}
                variant="contained"
                sx={{ height: "fit-content", backgroundColor: "#d32f2f" }}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            ) : (
              ""
            )}
          </Box>
          {nameInput()}
          {name === "disease" ? risksInput() : ""}
          {name === "disease" ? symptomsInput() : ""}
          {descriptionInput()}
          <Button
            sx={{ margin: 2 }}
            variant="contained"
            onClick={() => handleSubmit(name, payloadGenerator(name), rowId)}
          >
            Save
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
