import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import {Autocomplete, Button, TextField} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from "@mui/icons-material/AddCircleOutline";
import Tooltip from "@mui/material/Tooltip";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {handleDelete} from "./Row";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '3px solid #1565c0',
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
    display: "flex",
    flexDirection: "column"
};

const fetchNames = async (type) => {
    const response = await (fetch(`/${type}/names`));
    return await response.json();
};

export const sendDataForServer = async (url, payload, method) => {
    console.log(method)
    console.log(payload)
    let response = await fetch(url, {
        credentials: 'include',
        method: method,
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(payload)
    });
    console.log(response.status)
    if (response.status === 200) {
        console.log(response.json());
    }
};

export default function EditModal(props) {

    const {method, name, row} = props;

    const [open, setOpen] = React.useState(false);

    const [riskFactorsList, setRiskFactorsList] = React.useState([]);
    const [symptomsList, setSymptomsList] = React.useState([]);

    const rowId = method === "edit" ? row.id : "";
    const [rowName, setRowName] = React.useState(method === "edit" ? row.name : "");
    const [description, setDescription] = React.useState(method === "edit" ? row.description : "");
    const [riskFactors, setRiskFactors] = React.useState(method === "edit" ? row.riskFactors : "");
    const [symptoms, setSymptoms] = React.useState(method === "edit" ? row.symptoms : "");

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const submitNew = async (tableName, payload) => {
        console.log(payload)
        console.log(tableName)
        sendDataForServer(`/${tableName.replace(" ", "-") + "s"}/add`, payload, 'POST').then(() => console.log('ok'))
        window.location.reload();

    }


    const submitEdit = async (tableName, payload, id) => {
        console.log(payload)
        console.log(tableName)
        sendDataForServer(`/${tableName.replace(" ", "-") + "s"}/update/${id}`, payload, 'PUT').then(() => console.log('ok'))
        window.location.reload();

    }

    const handleSubmit = async (tableName, payload, id) => {
        if (method === "edit") {
            await submitEdit(tableName, payload, id)
        }
        else {
            await submitNew(tableName, payload)
        }
    }

    useEffect(() => {
        let cancelled = false;
        fetchNames("risk-factors").then((riskFactors) => {
            setRiskFactorsList(riskFactors)
        })

        function cleanUp() {
            cancelled = true;
        }

        return cleanUp;

    }, [])

    useEffect(() => {
        let cancelled = false;
        fetchNames("symptoms").then((symptoms) => {
            setSymptomsList(symptoms)
        })

        function cleanUp() {
            cancelled = true;
        }

        return cleanUp;

    }, [])

    const payloadGenerator = (tableName) => {
        if (tableName === "disease") {
            return {
                "name": rowName,
                "description": description,
                "symptoms": symptoms,
                "riskFactors": riskFactors
            }
        }
        else {
            return {
                "name": rowName,
                "description": description,
            }
        }

    }

    const nameInput = () => {
        return (
            <TextField sx={{margin: 2, maxWidth: 300}}
                       id="name-input"
                       label="Name"
                       onChange={(event) => {
                           setRowName(event.target.value)
                       }}
                       value={rowName}
            />
        )
    }

    const risksInput = () => {
        return (
            <Box display="flex">
                <Autocomplete sx={{padding: 2, width: 300}}
                              multiple
                              id="tags-risk-factors"
                              options={riskFactorsList}
                              filterSelectedOptions
                              onChange={(event, newValue) => {
                                  setRiskFactors(newValue);
                              }}
                              defaultValue={method === "edit" ? riskFactors.map((riskFactor) => riskFactor.name) : undefined}
                              renderInput={(params) => (
                                  <TextField
                                      {...params}
                                      label="Risk factors"
                                  />
                              )}
                />
                <IconButton component={Link} to={"/risk-factors"}><AddIcon color="primary"/></IconButton>
            </Box>
        )
    }

    const symptomsInput = () => {
        return (
            <Box display="flex">
                <Autocomplete sx={{padding: 2, width: 300}}
                              multiple
                              id="tags-symptoms"
                              options={symptomsList}
                              filterSelectedOptions
                              onChange={(event, newValue) => {
                                  setSymptoms(newValue);
                              }}
                              defaultValue={method === "edit" ? symptoms.map((symptom) => symptom.name) : undefined}
                              renderInput={(params) => (
                                  <TextField
                                      {...params}
                                      label="Symptoms"
                                  />
                              )}
                />
                <IconButton component={Link} to={"/symptoms"}><AddIcon color="primary"/></IconButton>
            </Box>
        )
    }

    const descriptionInput = () => {
        return (
            <TextField sx={{margin: 2}}
                       id="description-input"
                       label="Description"
                       multiline
                       rows={4}
                       onChange={(event) => {
                           setDescription(event.target.value)
                       }}
                       value={description}
            />
        )
    }

    return (
        <React.Fragment>
            {method === "edit" ? <IconButton onClick={handleOpen} color="primary"><EditIcon/></IconButton> :
                <Tooltip title={"Add new " + name}><Button onClick={handleOpen} variant="contained"
                                                           endIcon={<AddIcon/>}>new</Button></Tooltip>}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{display: "flex", justifyContent: "space-between"}}>
                        <Typography padding={2} color="primary" id="modal-modal-title" variant="h4" component="h2">
                            {method === "edit" ? "Edit" : "Add new"} {name}
                        </Typography>
                        {method === "edit" ?
                            <Button onClick={() => handleDelete(name, row.id)} variant="contained" sx={{height: "fit-content", backgroundColor: "#d32f2f"}}
                                    startIcon={<DeleteIcon/>}>
                                Delete
                            </Button> : ""}
                    </Box>
                    {nameInput()}
                    {name === "disease" ? risksInput() : ""}
                    {name === "disease" ? symptomsInput() : ""}
                    {descriptionInput()}
                    <Button sx={{margin: 2}}
                            variant="contained" onClick={() => handleSubmit(name, payloadGenerator(name), rowId)}>Save</Button>
                </Box>
            </Modal>
        </React.Fragment>
    );
}