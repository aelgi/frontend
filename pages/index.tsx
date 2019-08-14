import React, { FC, useState } from "react";
import { Card, Header, Form, TextField } from "../components";

const Index: FC<{}> = props => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    return <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
    }}>
        <Card>
            <Header title="User Login" />
            <Form>
                <TextField label="Username" value={username} onChange={setUsername} />
                <TextField label="Password" value={password} onChange={setPassword} />
            </Form>
        </Card>
    </div>
}

export default Index;