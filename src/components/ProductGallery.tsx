"use client";

import { Typography, Grid, Card, CardContent, CardMedia, Container } from "@mui/material";

export default function ProductGallery() {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 6 }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{ mt: 8, mb: 4, fontWeight: "bold" }}
      >
        Our Products
      </Typography>

      <Grid container spacing={3}>
        {/* Row 1 */}
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
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: { xs: "none", md: "block" } }}
        />

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

        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardMedia
              component="img"
              image="/premium-collection.jpg"
              alt="Premium Collection"
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
  );
}