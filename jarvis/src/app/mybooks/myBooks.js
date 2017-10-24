import { chunk } from 'lodash';
import React, { Component } from 'react';
import h from 'react-hyperscript';
import { Form, Button, ControlLabel, FormGroup, FormControl, HelpBlock, Col, Panel } from 'react-bootstrap';
import act from './data/actions';
import ReactDataGrid from 'react-data-grid';


export class MyBooks extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.props.GetBooks();
    this.state = {
      booksList: this.props.booksList
    }
    this._columns = [
      { key: 'bookId', name: 'ID' },
      { key: 'name', name: 'Title' },
      { key: 'author', name: 'Author' },
    ];
  }
  componentWillReceiveProps(nextProps) {
    if (this.props != nextProps)
      this.setState({ booksList: nextProps.booksList });
  }

  rowGetter = (i) => {
    return this.state.booksList[i];
  };

  render() {
    return (
      h('div', { className: "container" }, [
        h(Panel, { header: "My Books", bsStyle: "primary" }, [
          h(Form, { horizontal: true }, [
            h(FormGroup, { controlId: 'formBasicText' }, [
              h(Col, { componentClass: ControlLabel, sm: 2 }, "Book Name"),
              h(Col, { sm: 4 }, [
                h(FormControl, { type: 'text', placeholder: "Enter text" })
              ]),
              h(Col, { componentClass: ControlLabel, sm: 2 }, "Author"),
              h(Col, { sm: 4 }, [
                h(FormControl, { type: 'text', placeholder: "Enter text " })
              ])
            ]),
            h(FormGroup, { controlId: 'formInlineSave' }, [
              h(Col, { sm: 4 }),
              h(Col, { sm: 1 }, [
                h(Button, { bsStyle: "primary", bsSize: "small", onClick: () => this.props.save() }, "save")
              ]),
              h(Col, { sm: 1 }, [
                h(Button, { bsStyle: "danger", bsSize: "small" }, "cancel")
              ])
            ]),
            h(FormGroup, { controlId: 'formInlineSave' }, [
              h(Col, { sm: 12 }, [
                h(ReactDataGrid, { columns: this._columns, rowGetter: this.rowGetter, rowsCount: this.state.booksList.length, minHeight: 500 })
              ])
            ])
          ])
        ])
      ])
    );
  }
}


MyBooks.propTypes = {
  booksList: React.PropTypes.arrayOf(React.PropTypes.object),
  GetBooks: React.PropTypes.func.isRequired
};
