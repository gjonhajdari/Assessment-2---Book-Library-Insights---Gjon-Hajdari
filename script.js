const getBooks = async (url) => {
	try {
		const res = await fetch(url);
		const data = await res.json();
		return data;
	} catch (err) {
		console.error(err);
	}
};

(async () => {
	const books = await getBooks("./data.json");
	console.log(books);

	console.log("---------- Filtered Books ----------");
	const filteredBooks = books.filter((book) => book.yearPublished > 2000);
	console.log(filteredBooks);

	console.log("---------- Sorted Books ----------");
	const sortedByPages = books.toSorted((a, b) => a.pages - b.pages);
	console.log(sortedByPages);

	console.log("---------- Mapped Books ----------");
	const mappedBooks = books.map((book) => {
		return {
			title: book.title,
			author: book.author,
		};
	});
	console.log(mappedBooks);

	console.log("---------- Total Pages ----------");
	const totalPages = books.reduce((acc, book) => acc + book.pages, 0);
	console.log(totalPages);

	console.log("---------- Drama Book ----------");
	const dramaBook = books.find((book) => book.genres.includes("Drama"));
	console.log(dramaBook);
})();
