import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextField({value, setValue, label, placeholder, required}) {
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <Box
            component="form"
            sx={{ width: 400 }}
            noValidate
            autoComplete="off"
        >
            <div className="field-wrapper">
                <label className="label">{required ? <span className="required">*</span> : ''}{label}:</label>
                <TextField
                    id="outlined-basic"
                    inputProps={{ 'aria-label': 'Without label' }}
                    placeholder={placeholder}
                    value={value}
                    style={{width: 200}}
                    onChange={handleChange}
                    variant="outlined" />
            </div>
        </Box>
    );
}
