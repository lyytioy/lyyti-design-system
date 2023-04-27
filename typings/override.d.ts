import { createTheme } from '@mui/material/styles';

interface ColorStateOptions {
    activeContained: string;
    hover: string;
    selected: string;
    activeOutlined: string;
    outlinedStroke: string;
    disabledBg: string;
  }
  
  interface ColorShadeOptions {
    main: string;
    dark: string;
    light: string;
    contrastText: string;
  }
  
  interface ColorRangeOptions {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
  }
  
  declare module '@mui/material/styles/createPalette' {
    interface Palette {
      primaryStates: ColorStateOptions;
      secondaryStates: ColorStateOptions;
      errorStates: ColorStateOptions;
      light: ColorShadeOptions;
      lightStates: ColorStateOptions;
      sky: ColorRangeOptions;
      balticSea: ColorRangeOptions;
      coral: ColorRangeOptions;
      sunset: ColorRangeOptions;
      sun: ColorRangeOptions;
      sand: ColorRangeOptions;
      white: ColorShadeOptions;
    }
    interface PaletteOptions {
      primaryStates: ColorStateOptions;
      secondaryStates: ColorStateOptions;
      errorStates: ColorStateOptions;
      light: ColorShadeOptions;
      lightStates: ColorStateOptions;
      sky: ColorRangeOptions;
      balticSea: ColorRangeOptions;
      coral: ColorRangeOptions;
      sunset: ColorRangeOptions;
      sun: ColorRangeOptions;
      sand: ColorRangeOptions;
      white: ColorShadeOptions;
    }
  }
  
  declare module '@mui/material/styles' {
    interface TypographyVariants {
      navigationLink: React.CSSProperties;
    }
  
    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
      navigationLink?: React.CSSProperties;
    }
    interface PaletteColor {
      darkText?: string;
      lightBg?: string;
    }
    interface SimplePaletteColorOptions {
      darkText?: string;
      lightBg?: string;
    }
  }
  
  // Update the Typography's variant prop options
  declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
      navigationLink: true;
    }
  }
  
  // Update the Button's color prop options
  declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      white: true;
    }
  }
  
  declare module '@mui/material/IconButton' {
    interface IconButtonPropsColorOverrides {
      white: true;
    }
  }
  
  declare module '@mui/material/Fab' {
    interface FabPropsColorOverrides {
      white: true;
    }
  }
  
  declare module '@mui/material/Chip' {
    interface ChipPropsColorOverrides {
      white: true;
    }
  }