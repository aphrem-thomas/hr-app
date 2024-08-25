"use client";

import { Roboto_Flex, League_Spartan } from "next/font/google";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    spartanFont: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    spartanFont?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    spartanFont: true;
  }
}

const roboto = Roboto_Flex({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const PALLETTE = {
  primary: {
    light: "",
    main: "#a75959",
    dark: "",
    contrastText: "",
  },
  text:{
    primary:"#150b0b"
  },
  secondary: {
    light: "#eaedeb",
    main: "#a9d1c2",
    dark: "",
    contrastText: "",
  },
  info:{
    light:"#e9d6d6",
    main: "#829fbd",
    dark: "",
    contrastText: "",
  },
  background:{
    default:"#faf5f5"
  }
}

const BREAKPOINTS= {
  values: {
    xs: 0,
    sm: 800,
    md: 1440,
    lg: 1500,
    xl: 1836,
  },
}

export const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },

  palette: PALLETTE,
  
});
