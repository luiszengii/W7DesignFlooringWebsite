"use client";

import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const GridContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "24px",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    "& .span-two": {
      gridRow: "auto",
    },
  },
}));

const GridItem = styled(Card)(({ theme }) => ({
  height: "100%",
  transition: "all 0.3s ease-in-out",
  cursor: "pointer",
  "& .MuiCardMedia-root": {
    height: "280px",
    objectFit: "cover",
    transition: "all 0.3s ease-in-out",
  },
  "&:hover, &:active": {
    transform: "scale(1.02) translateY(-4px)",
    boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
  },
  "&.span-two": {
    gridRow: "span 2",
    "& .MuiCardMedia-root": {
      height: "100%",
      minHeight: "584px",
    },
  },
}));

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

      <GridContainer>
        {/* Timber Flooring - Spans 2 rows */}
        <GridItem className="span-two">
          <CardMedia
            component="img"
            image="https://images.unsplash.com/photo-1515446134809-993c501ca304?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Timber Flooring"
          />
          <CardContent>
            <Typography variant="h6">Timber Flooring</Typography>
          </CardContent>
        </GridItem>

        {/* Laminate Flooring */}
        <GridItem>
          <CardMedia
            component="img"
            image="https://images.unsplash.com/photo-1583418007992-a8e33a92e7ad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29vZHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Laminate Flooring"
          />
          <CardContent>
            <Typography variant="h6">Laminate Flooring</Typography>
          </CardContent>
        </GridItem>

        {/* Hybrid Flooring */}
        <GridItem>
          <CardMedia
            component="img"
            image="https://images.unsplash.com/photo-1597113366853-fea190b6cd82?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29vZHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Hybrid Flooring"
          />
          <CardContent>
            <Typography variant="h6">Hybrid Flooring</Typography>
          </CardContent>
        </GridItem>

        {/* Vinyl Flooring */}
        <GridItem>
          <CardMedia
            component="img"
            image="https://images.unsplash.com/photo-1567080586917-e6ab6aa0df85?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29vZHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Vinyl Flooring"
          />
          <CardContent>
            <Typography variant="h6">Vinyl Flooring</Typography>
          </CardContent>
        </GridItem>

        {/* Premium Collection - Spans 2 rows */}
        <GridItem className="span-two">
          <CardMedia
            component="img"
            image="https://images.unsplash.com/photo-1525947088131-b701cd0f6dc3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvb2R8ZW58MHx8MHx8fDA%3D"
            alt="Premium Collection"
          />
          <CardContent>
            <Typography variant="h6">Premium Collection</Typography>
          </CardContent>
        </GridItem>

        {/* Bamboo Flooring */}
        <GridItem>
          <CardMedia
            component="img"
            image="https://images.unsplash.com/photo-1506508618093-6fe5ce3def4c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvb2R8ZW58MHx8MHx8fDA%3D"
            alt="Bamboo Flooring"
          />
          <CardContent>
            <Typography variant="h6">Bamboo Flooring</Typography>
          </CardContent>
        </GridItem>

        {/* Special Edition */}
        <GridItem>
          <CardMedia
            component="img"
            image="https://images.unsplash.com/photo-1533035350251-aa8b8e208d95?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvb2R8ZW58MHx8MHx8fDA%3D"
            alt="Special Edition"
          />
          <CardContent>
            <Typography variant="h6">Special Edition</Typography>
          </CardContent>
        </GridItem>
      </GridContainer>
    </Container>
  );
}
