import React from 'react';
import h from 'react-hyperscript';
import { NavLink } from "react-router-dom";


export const Header = () => {
    return (
        h('nav', { className: 'navbar navbar-default' }, [
            h('div', { className: 'container' }, [
                h('div', { className: 'nav navbar-nav' }, [
                    h('li', [h(NavLink, { exact: true, to: '/home', activeClassName: 'active' }, 'Home')]),
                    h('li', [h(NavLink, { to: '/mybooks', activeClassName: 'active' }, 'My Books')]),
                    h('li', [h(NavLink, { to: '/sharebooks', activeClassName: 'active' }, 'Share My Books')]),
                    h('li', [h(NavLink, { to: '/requestbooks', activeClassName: 'active' }, 'Request for Books')]),
                    h('li', [h(NavLink, { to: '/returnbooks', activeClassName: 'active' }, 'Return Books')])
                ])
            ]) 
        ])
    );
};