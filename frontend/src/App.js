import './App.css';
import {Box} from "@mui/material";
import Navbar from "./components/Navbar";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <Box>
        <Navbar />
        <Outlet />
    </Box>
  );
}

export default App;
