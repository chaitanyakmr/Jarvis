import React from 'react';
import h from 'react-hyperscript'; 


export class ShareBooks extends React.Component { 
    render() {
        return (
            h('div', [
                h('h3', 'This is Share Books page') 
            ]) 
        );
    }
}