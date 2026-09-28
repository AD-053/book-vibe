# Book Vibe

<!-- Technologies -->
<div align="center">

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white" />
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" />
<img src="https://img.shields.io/badge/React_Toastify-FF6B6B?style=for-the-badge&logo=react&logoColor=white" />

<a href="https://book-vibe-ad53.netlify.app/">
	<img src="https://img.shields.io/badge/Live_Demo-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" />
</a>

</div>

Book Vibe is a responsive React web application for discovering books and managing personal reading lists. Users can browse books, view detailed information, sort the collection, and add books to their Read List or Wish List.

The project focuses on reusable React components, shared state management, client-side routing, responsive UI design, and a clean reading experience across mobile, tablet, and desktop devices.

## 🌐 Live Demo

Try the live project here:

🔗 [Book Vibe Live Website](https://book-vibe-ad53.netlify.app/)

## Features

- Responsive navigation and layout
- Browse books from a local JSON data source
- Book cards with cover images, authors, ratings, and categories
- Detailed book information pages
- Sort books by page count and rating
- Add books to a Read List
- Add books to a Wish List
- Prevent duplicate books in a list
- Prevent the same book from being added to both lists
- Remove books from either list
- Tabs for switching between Read List and Wish List
- Empty-list states
- Toast notifications for user feedback
- Custom error page for invalid routes
- Responsive design for mobile, tablet, and desktop screens

## Technologies Used

- React
- Vite
- JavaScript
- React Router
- Tailwind CSS
- DaisyUI
- React Icons
- React Tabs
- React Toastify
- JSON data

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── card/
│   ├── footer/
│   ├── homepage/
│   ├── listedBooks/
│   └── navbar/
├── context/
│   └── BookContext.jsx
├── layout/
│   └── MainLayout.jsx
├── pages/
│   ├── bookDetails/
│   ├── books/
│   ├── errorpage/
│   └── homepage/
├── routes/
│   └── Routes.jsx
├── index.css
└── main.jsx

public/
├── _redirects
└── booksData.json
```

## React Concepts Practiced

While building Book Vibe, I practiced:

- Creating reusable functional components
- Passing data through props
- Managing state with `useState`
- Sharing state with `useContext`
- Rendering dynamic lists with `.map()`
- Conditional rendering for empty states
- Handling button click events
- Building parent-child component communication
- Using React Router for page navigation
- Creating dynamic routes with URL parameters
- Loading route data with `loader` and `useLoaderData`
- Reading URL values with `useParams`
- Using React's `use()` API with `Suspense`
- Using `useMemo` for sorted book lists
- Preventing duplicate list items
- Removing items with `filter()`
- Sorting and checking data with JavaScript array methods

## Responsive Design Skills

The project helped me practice responsive design using Tailwind CSS and DaisyUI:

- Mobile-first layouts
- Responsive navigation and mobile menus
- Responsive book grids
- Flexible card widths
- Responsive typography and spacing
- Mobile-friendly reading-list tabs
- Responsive buttons and action areas
- Consistent layouts with shared navbar and footer components

The main responsive layouts used in the project include:

- Mobile: single-column book layouts
- Tablet: flexible multi-column layouts
- Desktop: wider book grids and spacious containers

## Component Design

The application is divided into smaller components so each part has a clear responsibility.

Examples include:

- `Navbar`: Main navigation and mobile menu
- `Banner`: Homepage introduction and call to action
- `AllBooks`: Book collection and sorting controls
- `BookCard`: Individual book preview card
- `ListedBookCard`: Book item displayed in a reading list
- `BookDetails`: Detailed information for a selected book
- `ListedReadList`: Read List display and actions
- `ListedWishList`: Wish List display and actions
- `BookContext`: Shared reading-list state and operations
- `MainLayout`: Shared navbar, page content, and footer layout
- `Footer`: Common footer section

This structure makes the application easier to maintain, understand, and extend.

## Getting Started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run the linter:

```bash
npm run lint
```

## Data Source

Book information is stored in:

```text
public/booksData.json
```

Each book contains information such as:

- `bookId`
- `bookName`
- `author`
- `image`
- `review`
- `totalPages`
- `rating`
- `category`
- `tags`
- `publisher`
- `yearOfPublishing`

The data-driven structure makes it possible to add or update books without rewriting the book card components.

## Current Limitations

This is currently a frontend project, so some features are local or simulated:

- No real authentication system
- No backend or database
- Reading lists are reset after a page refresh
- No local storage persistence
- Book data comes from a local JSON file
- Book cover images use external image URLs
- Sign-in and sign-up options are visual interface elements

## Future Improvements

Possible future improvements include:

- Add user authentication
- Save reading lists with local storage
- Connect the application to a backend API
- Add search and category filtering
- Add pagination for larger book collections
- Add reviews and user ratings
- Add a real user profile page
- Add book recommendations
- Add automated tests

## Skills Gained

By completing this project, I improved my ability to:

- Plan a component-based React application
- Build reusable and data-driven UI components
- Manage shared application state with Context API
- Work with local JSON data
- Create dynamic routes and detail pages
- Build interactive reading-list functionality
- Use React hooks effectively
- Design responsive layouts with Tailwind CSS
- Organize a project into clear folders and components
- Provide user feedback with toast notifications
- Handle invalid routes with a custom error page
- Deploy a Vite React project to Netlify

## Conclusion

Book Vibe helped me gain practical experience building a complete responsive React application with reusable components, dynamic data, client-side routing, shared state management, sorting functionality, and interactive reading lists.