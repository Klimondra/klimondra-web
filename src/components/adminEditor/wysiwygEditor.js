"use client"
import React from 'react';
import {
    BtnBold,
    BtnItalic,
    Editor,
    EditorProvider,
    Toolbar,
    BtnUndo,
    BtnRedo,
    BtnUnderline, BtnLink, BtnBulletList, BtnNumberedList, BtnStrikeThrough, BtnStyles
} from "react-simple-wysiwyg";


const WysiwygEditor = ({value, onChange}) => {
    return (
        <EditorProvider>
            <Editor value={value} onChange={onChange}>
                <Toolbar>
                    <BtnUndo />
                    <BtnRedo />
                    <BtnBold />
                    <BtnItalic />
                    <BtnUnderline />
                    <BtnStrikeThrough />
                    <BtnLink />
                    <BtnBulletList />
                    <BtnNumberedList />
                    <BtnStyles />
                </Toolbar>
            </Editor>
        </EditorProvider>
    );
};

export default WysiwygEditor;