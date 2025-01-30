# Assessment 2 - Book Library Insights - Gjon Hajdari

## General Setup for Each Assessment

1. Create an `index.html` in a local folder.
2. In the same folder, create a `data.json` file (for each assignment, name it differently or replace the contents with the JSON provided).
3. Open index.html in your browser.
4. Open the browser console (e.g., Chrome DevTools).
5. Use `fetch('./data.json')` or `fetch('data.json')` to retrieve and process the JSON data in the console.
6. Use pure JavaScript (no frameworks) for all logic.
7. If you want a quick styling framework (optional), you can include it in `index.html` —but the logic remains in the console.
8. Deliver your final code and console logs as the solution.

## Assessment #2: Book Library Insights Goal

Work with a list of books and authors. Perform array transformations and statistics in pure JavaScript.
JSON Data (save as `data.json`)

### Instructions

1. Fetch the data and store it in a variable, e.g. books.
2. Perform the following tasks:
   - Filter for books published after the year 2000. Log the filtered results.
   - Sort the books by pages in ascending order. Log the sorted list.
   - Map to produce an array of objects containing only `{ title, author }`. Log this new array.
   - Reduce to find the total number of pages across all books.
   - Find a book that has the genre "Drama" in its genres array. Log that book’s title.
   - Output your final answers in the console.
