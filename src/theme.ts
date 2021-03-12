import { createMuiTheme } from '@material-ui/core/styles'

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    black: string
    blue: string
    green: string
    paper: string
    red: string
    yellow: string
  }
  interface PaletteOptions {
    black: string
    blue: string
    green: string
    paper: string
    red: string
    yellow: string
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
  },
})

export default theme
