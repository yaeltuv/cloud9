import * as React from 'react';
import BasicTextField from "./TextField";
import BasicSelect from "./Select";
import Button2 from './Button2';
import {all_topics} from "../consts";

export default function AdTopic({topic, topics, setTopic, setTopics}) {
    return (
        <div className="ad-topic-wrapper">
            <label title="You can type your own topic, connect to one of the trend services by selecting it from the list or upload a CSV file" className="label"><span className="required">*</span>Ad Topic:</label>
            <div className="ad-topic">
                <BasicTextField value = {topic}
                                required={true}
                                setValue={setTopic}
                                width = { 200 }
                                placeholder="Type your ad topic"
                />
                or
                <BasicSelect
                    options={all_topics || []}
                    value={topics || ''}
                    setValue={setTopics}
                    placeholder="Select trend service"
                    width = { 200 }
                    multiple={true}
                />
                or
                <Button2 text="Upload CSV"/>
            </div>
        </div>
    );
}
