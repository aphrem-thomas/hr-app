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
    main: "#2f27ce",
    dark: "",
    contrastText: "",
  },
  text:{
    primary:"#050315"
  },
  secondary: {
    light: "",
    main: "#dedcff",
    dark: "",
    contrastText: "",
  },
  info:{
    light:"",
    main: "#433bff",
    dark: "",
    contrastText: "",
  },
  background:{
    default:"#fbfbfe"
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
