import { connect } from 'react-redux';
import myBooks from './myBooks';
import * as actions from './data/actions';

export const MyBooksContainer = connect({
    GetMyBooks: actions.getBooks
})