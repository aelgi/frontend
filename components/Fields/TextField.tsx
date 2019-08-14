import React, { FC, useCallback } from "react";

export interface ITextFieldProps {
    label: string;
    value: string;
    onChange: (s: string) => void;

    type?: any;
}

export const TextField: FC<ITextFieldProps> = props => {
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (props.onChange) props.onChange(e.currentTarget.value);
    }, [props.onChange]);
    
    return <div style={{
        padding: 10,
    }}>
        <div style={{ fontSize: "0.8rem" }}>{ props.label }</div>
        <div>
            <input type={props.type} value={props.value} onChange={handleChange} />
        </div>
    </div>
}