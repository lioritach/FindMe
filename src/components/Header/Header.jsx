import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              justifyContent: "center",
              fontSize: 15,
              textAlign: "center",
              width: 300,
            }}
          >
            FindMe - מצאו את המקומות הקרובים אליכם
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
