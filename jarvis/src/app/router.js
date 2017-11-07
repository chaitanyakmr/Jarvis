import h from 'react-hyperscript';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './home/home';
import { ShareBooks } from './sharebooks/shareBooks';
import { RequestBooks } from './requestbooks/requestBooks';
import { ReturnBooks } from './returnbooks/returnBooks';
import { MyBooksContainer } from './mybooks/myBooks-container';
import { Header } from './common/header';
import ErrorBoundary from './common/ErrorBoundary';

export const router = () => {
  return (
    h(BrowserRouter, [
      h('div', [
        h(ErrorBoundary, [
          h(Header),
          h(Switch, [
            h(Route, { exact: true, path: '/', component: Home }),
            h(Route, { path: '/sharebooks', component: ShareBooks }),
            h(Route, { path: '/mybooks', component: MyBooksContainer }),
            h(Route, { path: '/requestbooks', component: RequestBooks }),
            h(Route, { path: '/returnbooks', component: ReturnBooks }),
            h(Route, {
              render() {
                return <p>Page not found</p>;
              },
            }),
          ]),
        ]),
      ]),
    ])
  );
};
