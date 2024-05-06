import React, { useState } from 'react';
import { VisibilityOff, Visibility } from '@mui/icons-material';

export const useTogglePassword = (): [
    React.ElementType,
    React.HTMLInputTypeAttribute,
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
] => {
    const [visible, setVisibility] = useState(false);

    const Icon = visible ? VisibilityOff : Visibility;
    const inputType = visible ? 'text' : 'password';

    return [Icon, inputType, visible, setVisibility];
};
