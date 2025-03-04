"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function NavigationBar() {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={1}
      sx={{ py: 1, bgcolor: "#362b22" }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ color: "#362b22" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold", color: "#ffffff" }}
          >
            PREMIUM FLOORS
          </Typography>
          <Button
            color="inherit"
            endIcon={<KeyboardArrowDownIcon />}
            sx={{ mx: 1, color: "#ffffff" }}
          >
            Products
          </Button>
          <Button
            color="inherit"
            endIcon={<KeyboardArrowDownIcon />}
            sx={{ mx: 1, color: "#ffffff" }}
          >
            Brands
          </Button>
          <Button
            color="inherit"
            endIcon={<KeyboardArrowDownIcon />}
            sx={{ mx: 1, color: "#ffffff" }}
          >
            Resources
          </Button>
          <Button
            color="inherit"
            sx={{ minWidth: "auto", ml: 1, color: "#ffffff" }}
          >
            <SearchIcon />
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}