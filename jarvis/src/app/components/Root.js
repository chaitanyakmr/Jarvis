import React from "react";
import h from "react-hyperscript";
import { Header } from "./Header";

export class Root extends React.Component {
    render() {
        return ( 
            h('div', { className: "container" }, [
                h('div', { className: "row" }, [
                    h('div', { className: "col-xs-10 col-xs-offset-1" }, [
                        h(Header)
                    ])
                ]),
                h('div', { className: "row" }, [
                    h('div', { className: "col-xs-10 col-xs-offset-1" }, this.props.children)
                ])  
            ]) 
        );
    }
}