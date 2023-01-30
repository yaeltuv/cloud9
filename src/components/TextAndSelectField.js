import * as React from 'react';


export default function TextAndSelect({options,value, setValue, label, placeholder, required}) {
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className="field-wrapper">
            {/*<label className="label">{required ? <span className="required">*</span> : ''}{label}:</label>*/}
            {/*<DropdownInput*/}
            {/*    options={options}*/}
            {/*    menuClassName='dropdown-input'*/}
            {/*    onSelect={handleChange}*/}
            {/*    placeholder={placeholder}*/}
            />
        </div>
    );
}
