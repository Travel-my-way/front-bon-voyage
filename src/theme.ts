import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    black: string;
    black2: string;
    blue: string;
    green: string;
    paper: string;
    red: string;
    yellow: string;
  }
  interface PaletteOptions {
    black: string;
    black2: string;
    blue: string;
    green: string;
    paper: string;
    red: string;
    yellow: string;
  }
}

const theme = createMuiTheme({
  palette: {
    black: '#443737',
    blue: '#002CC7',
    green: '#0AAA93',
    paper: '#FCFCF2',
    red: '#FC4E40',
    yellow: '#FED13F',
    primary: {
      main: '#002CC7',
    },
    black2: '#2D3134',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 800,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },

  typography: {
    fontFamily: ['-apple-system', 'Monument Extended'].join(','),
  },
});

export default theme;
