import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: '"Epilogue", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Epilogue';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Epilogue'), local('Epilogue-Regular'), url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400&display=swap') format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
  palette: {
    primary: { main: "hsl(0, 0%, 8%)" },
  },
  button:{
    textTransform: "none"
  }
});
