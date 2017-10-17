import { connect } from 'react-redux';
import { MyBooks } from './myBooks';
import * as selector from './data/selector';
import * as actions from './data/actions';

export const MyBooksContainer = connect(state => ({
    booksList: selector.booksList(state),
}), {
        GetBooks: actions.getBooksRequestStarted
    })(MyBooks);