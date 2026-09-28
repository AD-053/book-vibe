import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <Link
      to={`/bookDetails/${book.bookId}`}
      className="block h-full w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-success"
    >
      <div className="aura aura-rainbow h-full w-full">
        <article className="card h-full bg-base-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <figure className="p-4 sm:p-6">
            <img
              src={book.image}
              alt={book.bookName}
              className="aspect-2/3 w-full max-w-55 rounded-xl object-cover"
            />
          </figure>

          <div className="card-body flex flex-1 p-4 sm:p-6">
            <div className="flex flex-wrap gap-2">
              {book.tags.map((tag) => (
                <span
                  key={tag}
                  className="badge badge-success badge-outline"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-3 flex items-start justify-between gap-3">
              <h2 className="min-w-0 flex-1 text-lg font-bold sm:text-xl">
                {book.bookName}
              </h2>

              <span className="shrink-0 text-right text-xs text-base-content/70">
                {book.totalPages} pages
              </span>
            </div>

            <p className="text-sm text-base-content/70">
              By <span className="font-medium">{book.author}</span>
            </p>

            <div className="mt-2 flex flex-col gap-1 text-xs text-base-content/70 sm:flex-row sm:justify-between sm:gap-3">
              <p className="break-words">
                Publisher: {book.publisher}
              </p>

              <p className="sm:text-right">
                Published: {book.yearOfPublishing}
              </p>
            </div>

            <div className="card-actions mt-auto justify-between border-t border-dashed border-gray-400 pt-3">
              <span className="font-semibold">{book.category}</span>

              <span className="flex items-center gap-1 font-bold">
                {book.rating}
                <CiStar aria-hidden="true" className="text-lg" />
              </span>
            </div>
          </div>
        </article>
      </div>
    </Link>
  );
};

export default BookCard;