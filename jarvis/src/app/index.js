import React from "react";
import { render } from "react-dom";
import h from "react-hyperscript";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { User } from "./components/User";

class App extends React.Component {
    render() {
        return (
            h(Router, { history: browserHistory }, [
                h(Route, { path: "/", component: Root }, [
                    h(IndexRoute, { component: Home }),
                    h(Route, { path: "user/:id", component: User }),
                    h(Route, { path: "home", component: Home })
                ])
            ])
        );
    }
}
render(<App />, window.document.getElementById("app"));
