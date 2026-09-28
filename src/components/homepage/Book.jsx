import BookCard from "../card/BookCard";

const Book = ({ book }) => {
  return (
    <div className="h-full min-w-0">
      <BookCard book={book} />
    </div>
  );
};

export default Book;
