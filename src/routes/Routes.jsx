import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Books from "../pages/books/Books";
import Homepage from "../pages/homepage/Homepage";
import Errorpage from "../pages/errorpage/Errorpage";
import BookDetails from "../pages/bookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/bookDetails/:bookId",
        element: <BookDetails />,
        loader: () => fetch("/booksData.json"),
      }
    ],
    errorElement: <Errorpage />,
  },
]);
