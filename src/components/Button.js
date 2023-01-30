import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButton({clickHandler, text}) {
    return (
        <Stack spacing={2} direction="row" style={{width: 100, left: 1000, position: "relative"}}>
            <Button style={{textTransform: 'none', float:'right'}} onClick={clickHandler} variant="contained">{text}</Button>
        </Stack>
    );
}
