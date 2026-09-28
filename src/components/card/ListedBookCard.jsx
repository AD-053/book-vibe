import { useContext } from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";
import { BookContext } from "../../context/BookContext";

const ListedBookCard = ({ book, listType }) => {
  const { removeFromReadList, removeFromWishList } = useContext(BookContext);

  const handleRemove = () => {
    if (listType === "read") {
      removeFromReadList(book.bookId);
    }

    if (listType === "wish") {
      removeFromWishList(book.bookId);
    }
  };

  return (
    <article className="card h-full flex-col bg-base-100 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:flex-row">
      <figure className="shrink-0 p-4 sm:w-48">
        <img
          src={book.image}
          alt={`Cover of ${book.bookName}`}
          className="aspect-2/3 w-full max-w-40 rounded-xl object-cover"
        />
      </figure>

      <div className="card-body min-w-0 gap-3 p-4 sm:p-6">
        <div className="flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span key={tag} className="badge badge-success badge-outline">
              {tag}
            </span>
          ))}
        </div>

        <div>
          <h2 className="break-words text-xl font-bold">{book.bookName}</h2>

          <p className="mt-1 text-sm text-base-content/70">
            By {book.author}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-1 text-sm text-base-content/70 sm:grid-cols-2">
          <p>Pages: {book.totalPages}</p>
          <p>Published: {book.yearOfPublishing}</p>

          <p className="wrap-break-word">
            Publisher: {book.publisher}
          </p>

          <p className="flex items-center gap-1">
            Rating: {book.rating}
            <CiStar aria-hidden="true" className="text-lg" />
          </p>
        </div>

        <div className="card-actions mt-auto flex-col gap-2 border-t border-dashed border-gray-300 pt-3 sm:flex-row sm:justify-between">
          <Link
            to={`/bookDetails/${book.bookId}`}
            className="btn btn-outline btn-success btn-sm"
          >
            View Details
          </Link>

          <button
            type="button"
            onClick={handleRemove}
            className="btn btn-error btn-sm text-white"
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
};

export default ListedBookCard;