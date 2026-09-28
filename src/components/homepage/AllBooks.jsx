import React, { use, useMemo, useState } from "react";
import Book from "./Book";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  const [sortingType, setSortingType] = useState("");

  const sortedBooks = useMemo(() => {
    const booksCopy = [...books];

    if (sortingType === "pages") {
      return booksCopy.sort((a, b) => a.totalPages - b.totalPages);
    }

    if (sortingType === "rating") {
      return booksCopy.sort((a, b) => b.rating - a.rating);
    }

    return booksCopy;
  }, [books, sortingType]);

  return (
    <section className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-success">
            Explore our collection
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">All Books</h2>
        </div>

        <label className="flex w-full flex-row items-center justify-between gap-3 whitespace-nowrap sm:w-auto">
          <span className="font-medium">Sort by:</span>

          <select
            value={sortingType}
            onChange={(event) => setSortingType(event.target.value)}
            className="select select-bordered"
          >
            <option value="">Default order</option>
            <option value="pages">Page number</option>
            <option value="rating">Rating</option>
          </select>
        </label>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedBooks.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default AllBooks;
