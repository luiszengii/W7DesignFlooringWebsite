"use client";

import { Box } from "@mui/material";
import NavigationBar from "@/components/NavigationBar";
import Gallery from "@/components/Gallery";
import ProductGallery from "@/components/ProductGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Box component="div">
      <NavigationBar />
      <Gallery />
      <ProductGallery />
      <Footer />
    </Box>
  );
}
