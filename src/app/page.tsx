"use client";

import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import NavigationBar from "@/components/NavigationBar";
import Hero from "@/components/Hero";
import ProductGallery from "@/components/ProductGallery";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

// Array of all images used in the site
const imagesToPreload = [
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
  "https://images.unsplash.com/photo-1556702571-3e11dd2b1a92",
  // Add all other image URLs from ProductGallery and other components
];

export default function Home() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imagePromises = imagesToPreload.map((src) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = reject;
          });
        });

        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error preloading images:", error);
        setImagesLoaded(true); // Show content even if some images fail to load
      }
    };

    loadImages();
  }, []);

  if (!imagesLoaded) {
    return <LoadingScreen />;
  }

  return (
    <Box component="div">
      <NavigationBar />
      <Hero />
      <ProductGallery />
      <Footer />
    </Box>
  );
}
