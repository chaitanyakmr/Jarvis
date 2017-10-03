import React from 'react';
import h from 'react-hyperscript'; 


export class MyBooks extends React.Component { 
    render() {
        return (
            h('div', [
                h('h3', 'This is My Books page') 
            ]) 
        );
    }
}