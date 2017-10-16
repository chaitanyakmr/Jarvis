import React, { Component, propTypes } from 'react';
import h from 'react-hyperscript';
import { Form, Button, ControlLabel, FormGroup, FormControl, HelpBlock, Col, Panel } from 'react-bootstrap';
import act from './data/actions'

export class MyBooks extends React.Component {
    constructor(props) {
        super();
    }
    registerBooks() {
        console.log("it works!");
    }
    clearBooks() {
        console.log("it works!");
    }
    getBooks() {
        
        console.log("clicked on Get Books");
    }
    render() {
        return (
            h('div', { className: "container" }, [
                h(Panel, { header: "My Books", bsStyle: "primary" }, [
                    h(Form, { horizontal: true }, [
                        // h(FormGroup, { controlId: 'formBasicText' }, [
                        //     h(Col, { componentClass: ControlLabel, sm: 2 }, "Book Name"),
                        //     h(Col, { sm: 4 }, [
                        //         h(FormControl, { type: 'text', placeholder: "Enter text" })
                        //     ]),
                        //     h(Col, { componentClass: ControlLabel, sm: 2 }, "Author"),
                        //     h(Col, { sm: 4 }, [
                        //         h(FormControl, { type: 'text', placeholder: "Enter text " })
                        //     ])
                        // ]),
                        h(FormGroup, { controlId: 'formInlineSave' }, [
                            h(Col, { sm: 4 }),
                            h(Col, { sm: 1 }, [
                                h(Button, { bsStyle: "primary", bsSize: "small", onClick: () => this.getBooks() }, "Get Books")
                            ]),
                            h(Col, { sm: 1 }, [
                                h(Button, { bsStyle: "danger", bsSize: "small" }, "cancel")
                            ])
                        ])
                    ])
                ])
            ])
        );
    }
}


// MyBooks.propTypes = {
//     getBooks: React.PropTypes.func.isRequired
// };

