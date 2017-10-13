import React from 'react';
import h from 'react-hyperscript'; 


export class RequestBooks extends React.Component { 
    render() {
        return (
            h('div', [
                h('h3', 'This is Request Books page') 
            ]) 
        );
    }
}