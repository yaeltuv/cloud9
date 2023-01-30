import * as React from 'react';
import Select from '@mui/material/Select';
import BasicSelect from "./Select";
import TextAndSelect from "./TextAndSelectField";
import BasicTextField from "./TextField";
import BasicButton from './Button';
import {demands, all_platforms, all_geos, states, languages, ages, genders} from '../consts';


export default function MainForm() {
    const [demand, setDemand] = React.useState('');
    const [platforms, setPlatforms] = React.useState([]);
    const [topic, setTopic] = React.useState('');
    const [geos, setGeos] = React.useState([]);
    const [state, setState] = React.useState('');
    const [language, setLanguage] = React.useState('');
    const [age, setAge] = React.useState('');
    const [gender, setGender] = React.useState('');
    return (
        <div className = "form-wrapper">
            <BasicSelect
                options={demands}
                label="Demand"
                value={demand}
                required={true}
                placeholder="Select Demand"
                setValue={setDemand}
            />
            <BasicSelect
                options={all_platforms[demand] || []}
                label="Platform"
                value={platforms || ''}
                setValue={setPlatforms}
                placeholder="Select Platforms"
                required={true}
                multiple={true}
            />
            <BasicTextField value = {topic}
                            required={true}
                            setValue={setTopic}
                            placeholder="Whats your ad topic?"
                            label="Ad Topic"
            />
            <BasicSelect
                options={all_geos || []}
                label="GEO"
                value={geos || ''}
                setValue={setGeos}
                placeholder="Select GEO"
                required={true}
                multiple={true}
            />
            <BasicSelect
                options={states}
                label="State"
                value={state}
                placeholder="Select State"
                setValue={setState}
            />
            <BasicSelect
                options={languages}
                label="Language"
                value={language}
                placeholder="Select Language"
                required={true}
                setValue={setLanguage}
            />
            <BasicSelect
                options={ages}
                label="Age"
                value={age}
                placeholder="Select Age"
                required={true}
                setValue={setAge}
            />
            <BasicSelect
                options={genders}
                label="Gender"
                value={gender}
                placeholder="Select Gender"
                required={true}
                setValue={setGender}
            />
            <BasicButton/>
        </div>
    );
}
