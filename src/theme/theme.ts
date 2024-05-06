'use client';
import { createTheme } from '@mui/material';

export const theme = createTheme({
    typography: {
        fontFamily: '--font-mulish',
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: '#8133f1',
                    },
                },
            },
        },

        MuiContainer: {
            styleOverrides: {
                root: {
                    maxWidth: '1440px',
                },

                // Note that you can customize other properties here, like padding, color, .etc.
            },
        },
    },

    palette: {
        white: {
            main: '#fff',
            light: '#fefefe',
        },
        dark: {
            main: '#151515',
            primary: '#333',
        },
        purplish: {
            blue: '#6200ee',
            primary: '#8133f1',
        },
    },
});
