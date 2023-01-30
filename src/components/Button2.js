import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Button2({text, clickHandler, onSide}) {
    return (
        <Stack spacing={2} direction="row">
            <Button className={onSide ? 'button-side' : 'button'} style={{textTransform: 'none'}} onClick={clickHandler} variant="outlined">{text}</Button>
        </Stack>
    );
}
