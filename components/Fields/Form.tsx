import React, { FC, useCallback, FormEvent } from "react";

export interface IFormProps {
    onSubmit?: () => void;
}

export const Form: FC<IFormProps> = props => {
    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (props.onSubmit) props.onSubmit();
        
    }, [props.onSubmit]);
    
    return <div>
        <form onSubmit={handleSubmit}>
            { props.children }
        </form>
    </div>
}