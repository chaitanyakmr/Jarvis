export const GET_BOOKS_REQUEST_STARTED = 'app/mybooks/GET_BOOKS_REQUEST_STARTED';
export const GET_BOOKS_REQUEST_SUCCEEDED = 'app/mybooks/GET_BOOKS_REQUEST_SUCCEEDED';
export const GET_BOOKS_REQUEST_FAILED = 'app/mybooks/GET_BOOKS_REQUEST_FAILED';
export const POST_BOOKS_REQUEST_STARTED = 'app/mybooks/POST_BOOKS_REQUEST_STARTED';
export const POST_BOOKS_REQUEST_SUCCEEDED = 'app/mybooks/POST_BOOKS_REQUEST_SUCCEEDED';
export const POST_BOOKS_REQUEST_FAILED = 'app/mybooks/POST_BOOKS_REQUEST_FAILED';
export const GET_ERROR_REQUEST_STARTED = 'app/mybooks/GET_ERROR_REQUEST_STARTED';
/**
 * Calls action for a books request
 */
export const getBooksRequestStarted = () => ({
  type: GET_BOOKS_REQUEST_STARTED,
});

/**
 * Calls action for a successful books request and passes the books list as payload
 */
export const getBooksRequestSucceeded = books => ({
  type: GET_BOOKS_REQUEST_SUCCEEDED,
  payload: books,
});

/**
 * Action for a books request failed
 */
export const getBooksRequestFailed = error => ({
  type: GET_BOOKS_REQUEST_FAILED,
  payload: error,
});

/**
 * Calls action for a post books request
 */
export const postBooksRequestStarted = books => ({
  type: POST_BOOKS_REQUEST_STARTED,
  payload: books,
});

/**
 * Calls action for a successful post books request
 */
export const postBooksRequestSucceeded = books => ({
  type: POST_BOOKS_REQUEST_SUCCEEDED,
  payload: books,
});

/**
 * Action for a post books request failed
 */
export const postBooksRequestFailed = error => ({
  type: POST_BOOKS_REQUEST_FAILED,
  payload: error,
});

/**
 * Action for a post books request failed
 */
export const getErrorMessage = error => ({
  type: GET_ERROR_REQUEST_STARTED,
  payload: error,
});
