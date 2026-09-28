import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);

  const handleMarkAsRead = (currentBook) => {
    const isInWishList = wishList.some(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isInWishList) {
      toast.error("This book already exists in your Wish List.");
      return;
    }

    const isAlreadyRead = readList.some(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isAlreadyRead) {
      toast.error("This book is already in your Read List.");
      return;
    }

    setReadList((previousBooks) => [...previousBooks, currentBook]);
    toast.success(`${currentBook.bookName} was added as read.`);
  };

  const handleWishList = (currentBook) => {
    const isInReadList = readList.some(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isInReadList) {
      toast.error("This book already exists in your Read List.");
      return;
    }

    const isAlreadyWished = wishList.some(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isAlreadyWished) {
      toast.error("This book is already in your Wish List.");
      return;
    }

    setWishList((previousBooks) => [...previousBooks, currentBook]);
    toast.success(`${currentBook.bookName} was added to your Wish List.`);
  };

  const removeFromReadList = (bookId) => {
    setReadList((previousBooks) =>
      previousBooks.filter((book) => book.bookId !== bookId),
    );
  };

  const removeFromWishList = (bookId) => {
    setWishList((previousBooks) =>
      previousBooks.filter((book) => book.bookId !== bookId),
    );
  };

  const contextValue = {
    readList,
    wishList,
    handleMarkAsRead,
    handleWishList,
    removeFromReadList,
    removeFromWishList,
  };

  return (
    <BookContext.Provider value={contextValue}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;