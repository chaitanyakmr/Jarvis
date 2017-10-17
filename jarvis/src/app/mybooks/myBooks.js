import { chunk } from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import h from 'react-hyperscript';
import { Form, Button, ControlLabel, FormGroup, FormControl, HelpBlock, Col, Panel } from 'react-bootstrap';
import act from './data/actions';
import { UxtDataPager, UxtList } from 'uxt-react';
import './data-pager-basics.scss';

export class MyBooks extends React.Component {
    static propTypes = {
        tags: PropTypes.arrayOf(PropTypes.object),
    }

    state = {
        activePage: 1,
        itemsPerPage: 10,
    };
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
                                h(Button, { bsStyle: "primary", bsSize: "small", onClick: () => this.props.GetBooks() }, "Get Books")
                            ]),
                            h(Col, { sm: 1 }, [
                                h(Button, { bsStyle: "danger", bsSize: "small" }, "cancel")
                            ])
                        ]),
                        h(FormGroup, { controlId: 'formInlineSave' }, [
                            h('.data-pager-basics', {}, [
                                h('.data-pager-basics__content', {}, [
                                    h(UxtList, {
                                        displayMode: 'compact',
                                        items: this.getPageItems(),
                                        primaryTextAccessor: 'name',
                                    }),
                                    h(UxtDataPager, {
                                        activePage: this.state.activePage,
                                        itemCount: this.props.tags.length,
                                        itemsPerPage: this.state.itemsPerPage,
                                        itemsPerPageChoices: [10, 25, 50],
                                        onActivePageChange: this.handleActivePageChange,
                                        onItemsPerPageChange: this.handleItemsPerPageChange,
                                    })
                                ])
                            ])
                        ])
                    ])
                ])
            ])
        );
    }

    getItemsPerPage = () =>
        (this.state.itemsPerPage === 'All'
            ? this.props.tags.length
            : this.state.itemsPerPage);

    getPageItems = () => {
        const pages = chunk(this.props.tags, this.getItemsPerPage());
        const page = pages.slice(this.state.activePage - 1);
        const pageItems = page[0];
        return pageItems;
    };

    handleActivePageChange = activePage =>
        this.setState({ activePage });

    handleItemsPerPageChange = itemsPerPage =>
        this.setState({ itemsPerPage });
}


// MyBooks.propTypes = {
//     getBooks: React.PropTypes.func.isRequired
// };

