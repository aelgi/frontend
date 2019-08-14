import React from "react";
import App, { Container } from "next/app";
import { ThemeProvider } from "../components";

export default class CustomApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return <Container>
            <ThemeProvider>
                <style jsx={true} global={true}>{`
                    @import url('https://fonts.googleapis.com/css?family=Fira+Sans&display=swap');

                    body {
                        margin: 0;
                        padding: 0;
                        border: 0;
                        font-family: "Fira Sans", sans-serif;
                    }
                `}</style>
                <Component {...pageProps} />
            </ThemeProvider>
        </Container>
    }
}