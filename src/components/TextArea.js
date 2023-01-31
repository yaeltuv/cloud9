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
            style={{ width: 262, height: 150, outline: 'none', border: '1px solid #CCCCCC', borderRadius: 5 , padding: 5}}
        />
        </div>
    );
}
