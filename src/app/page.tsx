"use client";

import { Box } from "@mui/material";
import NavigationBar from "@/components/NavigationBar";
import Hero from "@/components/Hero";
import ProductGallery from "@/components/ProductGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Box component="div">
      <NavigationBar />
      <Hero />
      <ProductGallery />
      <Footer />
    </Box>
  );
}
