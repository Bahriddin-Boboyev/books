import '@mui/material/styles/createPalette';

type whiteType = {
    main: string;
    light: string;
};

type darkType = {
    main: string;
    primary: string;
};

type purplishType = {
    blue: string;
    primary: string;
};

declare module '@mui/material/styles/createPalette' {
    interface PaletteOptions {
        white: whiteType;
        dark: darkType;
        purplish: purplishType;
    }
}
