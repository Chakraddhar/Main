// store/booksSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Load books from localStorage or fallback to mock data
const storedBooks = JSON.parse(localStorage.getItem("booksList"));
import { Books } from '../utils/mockData';

const booksSlice = createSlice({
  name: 'books',
  initialState: storedBooks || Books,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("booksList", JSON.stringify(state)); // Save updated list
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;

