import React, { FC } from "react";
import { useTheme } from "./themes";

export interface ICardProps {
}

export const Card: FC<ICardProps> = props => {
    const theme = useTheme();
    
    return <div style={{
        padding: 10,
    }}>
        <div style={{
            border: `2px solid ${theme.primary.toString()}`,
            padding: 10,
        }}>
            { props.children }
        </div>
    </div>
}