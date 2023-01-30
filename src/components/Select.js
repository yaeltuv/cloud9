import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({options, label, value, setValue, multiple, required, placeholder,width}) {
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Box sx={{ width: width || 400, minWidth: width ||400 }}>
            <FormControl fullWidth>
                <div className="field-wrapper">
                    {label && <label className="label">{required ? <span className="required">*</span> : ''}{label}:</label>}
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={value}
                        onChange={handleChange}
                        style={{width: width || 200}}
                        multiple={multiple}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        renderValue={(selected) => {
                            if (selected.length === 0) {
                                return <em className="placeholder">{placeholder}</em>;
                            }

                            return multiple ? selected.join(', ') : selected;
                        }}
                    >
                        <MenuItem disabled value="">
                            <em>{placeholder}</em>
                        </MenuItem>
                        {options.map((option,index) => {
                            return <MenuItem value={option} key={index}>{option}</MenuItem>
                        })}

                    </Select>
                </div>
            </FormControl>
        </Box>
    );
}
