import React, { FC } from "react";

export interface IHeaderProps {
    title: string;
}

export const Header: FC<IHeaderProps> = props => {
    return <div>
        <div style={{
            fontSize: "1.3rem",
        }}>
            { props.title }
        </div>
    </div>
}