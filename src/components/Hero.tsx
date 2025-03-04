"use client";

import { useEffect, useRef, useState } from "react";
import {
  Typography,
  Grid,
  TextField,
  Box,
  InputAdornment,
  Paper,
  Button,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const element = imageRef.current as HTMLElement;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const distance = 1 - rect.top / windowHeight;
        setScrollProgress(Math.min(Math.max(distance * 1.5, 0), 1.5));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const animationStyle = {
    transform: `scale(${1 + scrollProgress * 0.2}) translateY(${
      -2 * scrollProgress
    }px)`,
    boxShadow: `0px ${14 * scrollProgress}px ${
      24 * scrollProgress
    }px rgba(0, 0, 0, ${0.4 * scrollProgress})`,
  };

  return (
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
            Australia&apos;s largest wholesale supplier of timber & timber look
            flooring including laminate, hybrid, bamboo, cork and vinyl.
          </Typography>

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

        <Grid item xs={12} md={6}>
          <Box
            ref={imageRef}
            sx={{
              position: "relative",
              height: { xs: "450px", md: "600px" },
              mb: 2,
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2758&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Elegant interior with herringbone wooden flooring"
              sx={{
                width: "85%",
                height: "90%",
                objectFit: "cover",
                borderRadius: "8px",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: -1,
                transition: "all 0.3s ease-in-out",
                ...animationStyle,
                "&:hover, &:active": {
                  transform: "scale(1.05) translateY(-2px)",
                  boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.4)",
                },
              }}
            />
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1556702571-3e11dd2b1a92?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww"
              alt="Luxurious bathroom with wooden flooring"
              sx={{
                width: "50%",
                height: "40%",
                objectFit: "cover",
                borderRadius: "8px",
                position: "absolute",
                bottom: 0,
                right: 0,
                zIndex: 0,
                transition: "all 0.3s ease-in-out",
                ...animationStyle,
                "&:hover, &:active": {
                  transform: "scale(1.05) translateY(-2px)",
                  boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.5)",
                  zIndex: 0,
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
