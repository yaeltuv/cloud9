import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextField({value, setValue, label, placeholder, required, width, adtopic}) {
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <Box
            component="form"
            sx={{ width: width || 400}}
            noValidate
            autoComplete="off"
        >
            <div className="field-wrapper">
                {label && <label className="label">{required ? <span className="required">*</span> : ''}{label}:</label>}
                <TextField
                    id="outlined-basic"
                    inputProps={{ 'aria-label': 'Without label' }}
                    placeholder={placeholder}
                    value={value}
                    inputProps={{
                        style: {
                            height: adtopic ? 30 : 80,
                            padding: '0 14px',
                        },
                    }}
                    style={{width: width || 300, marginLeft: adtopic ? 0 : 5}}
                    onChange={handleChange}
                    variant="outlined" />
            </div>
        </Box>
    );
}
