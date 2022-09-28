import './App.css';
import {Box} from "@mui/material";
import Navbar from "./components/Navbar";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <Box sx={{paddingTop: 5, display: "flex", justifyContent: "center", height: "100vh", alignItems: "center"}}>
        <Navbar />
        <Outlet />
    </Box>
  );
}

export default App;
