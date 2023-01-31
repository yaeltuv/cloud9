import * as React from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';

export default function TextArea({placeholder, value, setValue, label, required}) {
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className="field-wrapper">
        {label && <label className="label">{required ? <span className="required">*</span> : ''}{label}:</label>}
        <TextareaAutosize
            aria-label="empty textarea"
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            style={{ width: 265, height: 150 }}
        />
        </div>
    );
}
