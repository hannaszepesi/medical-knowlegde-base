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

export default function EditModal(props) {

    const {method} = props;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const risksInput = () => {
        return (
            <Autocomplete sx={{padding: 2, maxWidth: 300}}
                          multiple
                          id="tags-risks"
                          options={[]}
                          getOptionLabel={(option) => option.name}
                          filterSelectedOptions
                          renderInput={(params) => (
                              <TextField
                                  {...params}
                                  label="Risk factors"
                              />
                          )}
            />
        )
    }

    const symptomsInput = () => {
        return (
            <Autocomplete sx={{padding: 2, maxWidth: 300}}
                          multiple
                          id="tags-risks"
                          options={[]}
                          getOptionLabel={(option) => option.name}
                          filterSelectedOptions
                          renderInput={(params) => (
                              <TextField
                                  {...params}
                                  label="Symptoms"
                              />
                          )}
            />
        )
    }

    const descriptionInput = () => {
        return (
            <TextField sx={{margin: 2}}
                       id="description-input"
                       label="Description"
                       multiline
                       rows={4}
                       defaultValue=""
            />
        )
    }

    const nameInput = () => {
        return (
            <TextField sx={{margin: 2, maxWidth: 300}}
                       id="name-input"
                       label="Name"
                       defaultValue=""
            />
        )
    }

    return (
        <React.Fragment>
            {method === "edit" ? <IconButton onClick={handleOpen} color="primary"><EditIcon/></IconButton> :
                <Tooltip title="Add new disease"><Button onClick={handleOpen} variant="contained"
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
                            {method === "edit" ? "Edit" : "Add new"} disease
                        </Typography>
                        {method === "edit" ?
                            <Button variant="contained" sx={{height: "fit-content", backgroundColor: "#d32f2f"}}
                                    startIcon={<DeleteIcon/>}>
                                Delete
                            </Button> : ""}
                    </Box>
                    {nameInput()}
                    {risksInput()}
                    {symptomsInput()}
                    {descriptionInput()}
                    <Button sx={{margin: 2}} variant="contained">Save</Button>
                </Box>
            </Modal>
        </React.Fragment>
    );
}