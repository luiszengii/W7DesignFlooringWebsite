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
import NavigationBar from "@/components/NavigationBar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <Box component="div">
      <NavigationBar />
      <Hero />

      {/* Product Categories */}
      <Container maxWidth="lg" sx={{ mt: 8, mb: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ mt: 8, mb: 4, fontWeight: "bold" }}
        >
          Our Products
        </Typography>
      </Container>

      {/* Rest of the code remains the same */}
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ mt: 8, mb: 6 }}>
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
