import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import ListedBookCard from "../card/ListedBookCard";

const ListedReadList = () => {
  const { readList } = useContext(BookContext);

  if (readList.length === 0) {
    return (
      <section className="flex min-h-[50vh] items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            No books in your read list
          </h2>

          <p className="mt-2 text-base-content/60">
            Books you mark as read will appear here.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-success">
          Your collection
        </p>

        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Read List</h1>

        <p className="mt-2 text-base-content/70">
          {readList.length} {readList.length === 1 ? "book" : "books"} completed
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {readList.map((book) => (
          <div key={book.bookId} className="h-full min-w-0">
            <ListedBookCard book={book} listType="read" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListedReadList;