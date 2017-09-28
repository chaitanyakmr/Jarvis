import React from "react";
import h from "react-hyperscript";
import { browserHistory } from "react-router";

export class User extends React.Component {
    onNavigateHome() {
        browserHistory.push("/home");
    } 
    render() {
        return (
            h('div', [
                h('h3', "This is hyperscript"),
                h('p', "User ID : " + this.props.params.id),
                h('button', { onClick: this.onNavigateHome, className: "btn btn-primary" }, "Go Home!")
            ]) 
        );
    }
}