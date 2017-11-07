/* eslint-disable */
import React from 'react';
import h from 'react-hyperscript';
import Img from 'react-image';
// import { Grid, Row, Col } from 'react-bootstrap';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return h('div', [
                // h(Grid, [
                //     h(Row, [
                //         h(Col, { xsOffset: 2, xs: 12 }, [
                h(Img, { src: '/Images/ErrorImg.PNG' })
                //         ])
                //     ])

                // ])
            ]);
        }
        return this.props.children;
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
    }
}
