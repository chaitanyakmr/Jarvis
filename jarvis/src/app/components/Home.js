import React from "react";
import h from "react-hyperscript";

export class Home extends React.Component {
    render() {
        return (
            h('div', [
                h('h3',"Home")
            ]) 
        );
    }
}