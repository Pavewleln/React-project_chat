import React from 'react';
import s from './FormsControls.module.css'
import {Field} from "redux-form";
export const Textarea = ({input, meta, ...props}) =>{
    const hasError = meta.error && meta.touched;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <textarea {...input} {...props}/>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
}
export const Input = ({input, meta, ...props}) =>{
    const hasError = meta.error && meta.touched;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <input {...input} {...props}/>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
}
export const createField = (placeholder, name, validators, component, props = {}, text = "") =>(
    <div>
        <Field placeholder={placeholder} name={name} validators={validators} component={component} {...props}/>
        {text}
    </div>
)