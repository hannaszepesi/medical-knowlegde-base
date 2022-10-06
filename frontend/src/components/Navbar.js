import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const options = ["diseases", "symptoms", "risk-factors"];

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        background:
          "linear-gradient(90deg, rgba(0,105,192,1) 21%, rgba(110,198,255,1) 74%);",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", sm: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MEDICAL KNOWLEDGE BASE
          </Typography>

          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {options.map((option) => (
              <Button
                key={option}
                component={Link}
                to={"/" + option}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {option.replace("-", " ")}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
