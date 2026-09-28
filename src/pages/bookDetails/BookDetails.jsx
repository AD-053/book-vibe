import { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookContext";

const BookDetails = () => {
  const { bookId } = useParams();
  const books = useLoaderData();

  const expectedBook = books.find((book) => book.bookId === Number(bookId));

  const { handleMarkAsRead, handleWishList } = useContext(BookContext);

  if (!expectedBook) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Book not found</h1>

          <p className="mt-2 text-base-content/60">
            The book you are looking for does not exist.
          </p>

          <Link to="/" className="btn btn-success mt-6 text-white">
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  const {
    bookName,
    author,
    image,
    review,
    rating,
    category,
    totalPages,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  return (
    <main className="container mx-auto max-w-6xl px-4 py-4 sm:px-6">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-8">
        <figure className="flex items-center justify-center rounded-xl bg-base-200 p-4 sm:p-6">
          <img
            src={image}
            alt={`Cover of ${bookName}`}
            className="aspect-[2/3] w-full max-w-[250px] rounded-xl object-cover shadow-lg"
          />
        </figure>

        <article className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-success">
            {category}
          </p>

          <h1 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">
            {bookName}
          </h1>

          <p className="mt-2 text-base">
            By <span className="font-bold">{author}</span>
          </p>

          <div className="my-3 border-y border-base-300 py-3">
            <h2 className="mb-1 text-sm font-bold">Review</h2>

            <p className="text-sm leading-6 text-base-content/70">{review}</p>
          </div>

          <div className="mb-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="badge badge-sm badge-success badge-outline"
              >
                {tag}
              </span>
            ))}
          </div>

          <dl className="space-y-2 border-t border-base-300 pt-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-base-content/60">Pages</dt>
              <dd className="font-bold">{totalPages}</dd>
            </div>

            <div className="flex justify-between gap-4">
              <dt className="text-base-content/60">Publisher</dt>
              <dd className="text-right font-bold">{publisher}</dd>
            </div>

            <div className="flex justify-between gap-4">
              <dt className="text-base-content/60">Published</dt>
              <dd className="font-bold">{yearOfPublishing}</dd>
            </div>

            <div className="flex justify-between gap-4">
              <dt className="text-base-content/60">Rating</dt>
              <dd className="font-bold">{rating} / 5</dd>
            </div>
          </dl>

          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              className="btn btn-sm btn-success flex-1 text-white"
              onClick={() => handleMarkAsRead(expectedBook)}
            >
              Mark as Read
            </button>

            <button
              type="button"
              className="btn btn-sm btn-outline btn-secondary flex-1"
              onClick={() => handleWishList(expectedBook)}
            >
              Add to Wishlist
            </button>
          </div>
        </article>
      </div>
    </main>
  );
};

export default BookDetails;
