import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import ListedBookCard from "../card/ListedBookCard";

const ListedWishList = () => {
  const { wishList } = useContext(BookContext);

  if (wishList.length === 0) {
    return (
      <section className="flex min-h-[50vh] items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            No books in your wish list
          </h2>

          <p className="mt-2 text-base-content/60">
            Books you add to your wishlist will appear here.
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

        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Wish List</h1>

        <p className="mt-2 text-base-content/70">
          {wishList.length} {wishList.length === 1 ? "book" : "books"} saved
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {wishList.map((book) => (
          <div key={book.bookId} className="h-full min-w-0">
            <ListedBookCard book={book} listType="wish" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListedWishList;