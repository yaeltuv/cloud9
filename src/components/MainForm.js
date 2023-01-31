import * as React from 'react';
import BasicSelect from "./Select";
import BasicTextField from "./TextField";
import BasicButton from './Button';
import {demands, all_platforms, all_countries, states, languages, ages, genders, tones} from '../consts';
import AdTopic from "./AdTopic";
import BasicModal from "./Modal";
import TextArea from "./TextArea";
const { Configuration, OpenAIApi } = require("openai");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const configuration = new Configuration({
    apiKey: urlParams.get('key')
});

const openai = new OpenAIApi(configuration);


export default function MainForm() {
    const [demand, setDemand] = React.useState('');
    const [platforms, setPlatforms] = React.useState([]);
    const [topic, setTopic] = React.useState('');
    const [topics, setTopics] = React.useState([]);
    const [countries, setCountries] = React.useState([]);
    const [state, setState] = React.useState('');
    const [language, setLanguage] = React.useState('');
    const [age, setAge] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [result, setResult] = React.useState('');
    const [images, setImages] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [tone, setTone] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const [loading, setIsLoading] = React.useState(true);
    const [query,setQuery] = React.useState('');

    const submit = async () => {
        setOpenModal(true);
        setIsLoading(true);
        const query = 'create 5 different headlines for ' +  platforms[0] + ' that are localized, ads are about ' + topic + '. ads length no more than 100 characters per headline with intent of purchasing and include' + ' ${city:capitalized}$ instead of location. finish each headline with dot please.';
        setQuery(query);
        try {
            const completion = await openai.createCompletion({
                model: "text-davinci-002",
                prompt: query,
                max_tokens: 1500
            });
            const images = await openai.createImage({
                n:4,
                size:"256x256",
                prompt: `${topic}, big American house closeup, without people`
            })
            if(completion){
                console.log(completion.data.choices[0].text)
                setResult(completion.data.choices[0].text.replace('1', '')
                    .replace('2', '')
                    .replace('3','')
                    .replace('4','')
                    .replace('5',''));

            }
            if(images){
                console.log(images);
                setImages(images.data.data);
                setIsLoading(false)
            }
        }catch(e){
            setIsLoading(false);
            console.log(e);
        }
    };

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
            <AdTopic topic={topic} topics={topics} setTopic={setTopic} setTopics={setTopics}/>
            <TextArea
                label="Description"
                value={description || ''}
                setValue={setDescription}
                placeholder="Type Description"
                width={ 400 }
                height={300}
            />
            <BasicSelect
                options={tones || []}
                label="Tone of Voice"
                value={tone || ''}
                setValue={setTone}
                placeholder="Select Tone"
            />
            <BasicSelect
                options={all_countries || []}
                label="Country"
                value={countries || ''}
                setValue={setCountries}
                placeholder="Select Country"
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
            <div className="buttons-wrapper-bottom">
                <div>Clear</div>
                <BasicButton text="Generate" clickHandler={submit}/>
            </div>
            <BasicModal open={openModal}
                        setOpen={setOpenModal}
                        query={query}
                        isLoading={loading}
                        result={result}
                        topic={topic}
                        images={images}
            />
        </div>
    );
}
