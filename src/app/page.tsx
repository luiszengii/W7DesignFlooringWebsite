"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  TextField,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  InputAdornment,
  Paper,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from "next/image";
import Copyright from "@/components/Copyright";

export default function Home() {
  return (
    <Box component="div">
      {/* Navigation Bar */}
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

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ mt: 8, mb: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "2.5rem", md: "3.5rem" },
              }}
            >
              Hard Flooring Specialists
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Australia&apos;s largest wholesale supplier of timber & timber
              look flooring including laminate, hybrid, bamboo, cork and vinyl.
            </Typography>

            {/* Search Bar */}
            <Paper
              elevation={0}
              sx={{
                display: "flex",
                mb: 6,
                border: "1px solid #e0e0e0",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <TextField
                fullWidth
                placeholder="Search site"
                variant="outlined"
                InputProps={{
                  sx: { borderRadius: 0 },
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: 0,
                  px: 3,
                }}
              >
                Search
              </Button>
            </Paper>
          </Grid>

          {/* Hero Images */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                height: { xs: "450px", md: "600px" },
                mb: 2,
              }}
            >
              {/* Main image */}
              <Box
                component="img"
                src="/placeholder-main.jpg"
                alt="Elegant interior with herringbone wooden flooring"
                sx={{
                  width: "85%",
                  height: "80%",
                  objectFit: "cover",
                  borderRadius: "8px",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                }}
              />

              {/* Secondary image - overlapping */}
              <Box
                component="img"
                src="/placeholder-secondary.jpg"
                alt="Luxurious bathroom with wooden flooring"
                sx={{
                  width: "60%",
                  height: "50%",
                  objectFit: "cover",
                  borderRadius: "8px",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  zIndex: 2,
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
                }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Product Categories */}
        <Typography
          variant="h4"
          component="h2"
          sx={{ mt: 8, mb: 4, fontWeight: "bold" }}
        >
          Our Products
        </Typography>

        {/* Product Gallery */}
        <Grid container spacing={3}>
          {/* Row 1 */}
          {/* Large left image (2 rows height) */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Card sx={{ height: "100%", flex: 1 }}>
              <CardMedia
                component="img"
                image="/timber-flooring.jpg"
                alt="Timber Flooring"
                sx={{
                  height: "100%",
                  minHeight: { xs: "300px", md: "600px" },
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography variant="h6">Timber Flooring</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Top middle */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="280"
                image="/laminate-flooring.jpg"
                alt="Laminate Flooring"
              />
              <CardContent>
                <Typography variant="h6">Laminate Flooring</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Top right */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="280"
                image="/hybrid-flooring.jpg"
                alt="Hybrid Flooring"
              />
              <CardContent>
                <Typography variant="h6">Hybrid Flooring</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Row 2 */}
          {/* This is empty because the left column spans 2 rows */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            {/* This Grid is intentionally empty because the tall card above takes 2 rows */}
          </Grid>

          {/* Middle middle */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="280"
                image="/vinyl-flooring.jpg"
                alt="Vinyl Flooring"
              />
              <CardContent>
                <Typography variant="h6">Vinyl Flooring</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Middle right - CAT IMAGE (2x1 width) */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                image="/premium-collection.jpg"
                alt="Cat"
                sx={{
                  height: "100%",
                  minHeight: { xs: "300px", md: "280px" },
                  objectFit: "cover",
                }}
              />
            </Card>
          </Grid>

          {/* Row 3 */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="280"
                image="/bamboo-flooring.jpg"
                alt="Bamboo Flooring"
              />
              <CardContent>
                <Typography variant="h6">Bamboo Flooring</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="280"
                image="/special-edition.jpg"
                alt="Special Edition"
              />
              <CardContent>
                <Typography variant="h6">Special Edition</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Bottom right */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="280"
                image="/bamboo-flooring.jpg"
                alt="Additional Flooring Option"
              />
              <CardContent>
                <Typography variant="h6">Engineered Flooring</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: "#f5f5f5", pt: 6, pb: 4, mt: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="flex-start">
            {/* Logo */}
            <Grid item xs={12} md={3} sx={{ mb: { xs: 3, md: 0 } }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "bold",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                PREMIUM FLOORS
              </Typography>
            </Grid>

            {/* Footer Links */}
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ textAlign: "left" }}
                  >
                    Products
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Button
                      sx={{ justifyContent: "flex-start", px: 0, py: 0.5 }}
                    >
                      Flooring Products
                    </Button>
                    <Button
                      sx={{ justifyContent: "flex-start", px: 0, py: 0.5 }}
                    >
                      Our ranges
                    </Button>
                    <Button
                      sx={{ justifyContent: "flex-start", px: 0, py: 0.5 }}
                    >
                      Find a Stockist
                    </Button>
                  </Box>
                </Grid>

                <Grid item xs={4}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ textAlign: "left" }}
                  >
                    Company
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Button
                      sx={{ justifyContent: "flex-start", px: 0, py: 0.5 }}
                    >
                      About us
                    </Button>
                    <Button
                      sx={{ justifyContent: "flex-start", px: 0, py: 0.5 }}
                    >
                      Contact us
                    </Button>
                    <Button
                      sx={{ justifyContent: "flex-start", px: 0, py: 0.5 }}
                    >
                      Sustainability
                    </Button>
                  </Box>
                </Grid>

                <Grid item xs={4}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ textAlign: "left" }}
                  >
                    Resources
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Button
                      sx={{ justifyContent: "flex-start", px: 0, py: 0.5 }}
                    >
                      Customer portal
                    </Button>
                    <Button
                      sx={{ justifyContent: "flex-start", px: 0, py: 0.5 }}
                    >
                      Academy
                    </Button>
                    <Button
                      sx={{ justifyContent: "flex-start", px: 0, py: 0.5 }}
                    >
                      Legal
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            {/* Social Links */}
            <Grid
              item
              xs={12}
              md={3}
              sx={{ textAlign: { xs: "center", md: "right" } }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-end" },
                  gap: 2,
                }}
              >
                <IconButton
                  aria-label="Facebook"
                  component="a"
                  href="#facebook"
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  aria-label="Instagram"
                  component="a"
                  href="#instagram"
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton aria-label="YouTube" component="a" href="#youtube">
                  <YouTubeIcon />
                </IconButton>
              </Box>
            </Grid>

            {/* Copyright */}
            <Grid item xs={12} sx={{ mt: 4 }}>
              <Copyright />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
