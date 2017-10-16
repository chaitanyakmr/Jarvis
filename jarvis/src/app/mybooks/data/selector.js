const get = state => state.app.mybooks.myBooks;

export const booksList = state => get(state).booksList; 