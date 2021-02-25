import { createMuiTheme } from '@material-ui/core/styles'

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    blue: string
    green: string
    paper: string
    red: string
    yellow: string
  }
  interface PaletteOptions {
    blue: string
    green: string
    paper: string
    red: string
    yellow: string
  }
}

const theme = createMuiTheme({
  palette: {
    blue: '#002CC7',
    green: '#0AAA93',
    paper: '#E5E5E5',
    red: '#FC4E40',
    yellow: '#FED13F',
  },
})

export default theme
