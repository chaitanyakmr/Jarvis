import React from 'react';
import { render } from 'react-dom';
import h from 'react-hyperscript';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './components/home';
import { ShareBooks } from './components/ShareBooks';
import { RequestBooks } from './components/requestBooks';
import { ReturnBooks } from './components/returnBooks';
import { MyBooks } from './components/myBooks';
import { Header } from './components/header';

class App extends React.Component {
    render() {
        return (
            h(BrowserRouter, [
                h('div', [
                    h(Header),
                    h(Switch, [
                        h(Route, { exact:'', path: '/', component: Home }),
                        h(Route, { path: '/sharebooks', component: ShareBooks }),
                        h(Route, { path: '/mybooks', component: MyBooks }),
                        h(Route, { path: '/requestbooks', component: RequestBooks }),
                        h(Route, { path: '/returnbooks', component: ReturnBooks }),
                        h(Route, {
                            render: function () {
                                return <p>File not found</p>
                            }
                        })
                    ]) 
                ])

            ])
        );
    }
}
render(<App />, window.document.getElementById('app'));
