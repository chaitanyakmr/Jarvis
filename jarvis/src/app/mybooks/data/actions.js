export const GET_BOOKS_REQUEST_STARTED = 'app/mybooks/GET_BOOKS_REQUEST_STARTED';
export const GET_BOOKS_REQUEST_SUCCEEDED = 'modules/plants/plantSelection/GET_BOOKS_REQUEST_SUCCEEDED';
export const GET_BOOKS_REQUEST_FAILED = 'modules/plants/plantSelection/GET_BOOKS_REQUEST_FAILED';

/**
 * Calls action for a books request
 */
export const getBooksRequestStarted = () => ({
    type: GET_BOOKS_REQUEST_STARTED
});

/**
 * Calls action for a successful books request and passes the books list as payload
 */
export const getBooksRequestSucceeded = books => ({
    type: GET_BOOKS_REQUEST_SUCCEEDED,
    payload: books
});

/**
 * Action for a books request failed
 */
export const getBooksRequestFailed = error => ({
    type: GET_BOOKS_REQUEST_FAILED,
    payload: error
});