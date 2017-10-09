import React from 'react';
import h from 'react-hyperscript';
import { Form, Button, ControlLabel, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';

export class MyBooks extends React.Component {

    render() {
        return (
            h(Form, { inline: true }, [
                h(FormGroup, { controlId: 'formBasicText' }, [
                    h(ControlLabel, "Book Name"),    
                    h(FormControl, { type: 'text', placeholder: "Enter text " })
                ]),
                h(FormGroup, { controlId: 'formInlineEmail' }, [
                    h(ControlLabel, "Author "),
                    h(FormControl, { type: 'text', placeholder: "Enter text" })
                ]),
                h(Button,"save")
            ])
        );
    }
}

 