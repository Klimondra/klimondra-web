import React, {useEffect, useState} from 'react';
import Select from "react-select";

const RelationSelector = ({relatedData, relationName, editorData, setEditorData }) => {

    const options = relatedData.map((item) => ({
        label: item.label,
        value: item.id
    }))

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    return (
        mounted && <Select
            options={options}
            isClearable
            isMulti
            closeMenuOnSelect={false}
            value={editorData.relations?.[relationName] ?? []}
            onChange={(value) => setEditorData({...editorData, relations: {...editorData.relations, [relationName]: value}}) }
        />
    );
};

export default RelationSelector;