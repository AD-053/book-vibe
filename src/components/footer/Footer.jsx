import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-base-300 bg-base-200 text-base-content">
      <div className="container mx-auto grid gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <Link to="/" className="text-2xl font-bold text-success">
            Book Vibe
          </Link>

          <p className="mt-3 max-w-sm text-sm text-base-content/70">
            Discover timeless stories, exciting adventures, and your next
            favorite book.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-semibold">Quick Links</h2>

          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="transition hover:text-success">
                Home
              </Link>
            </li>

            <li>
              <Link to="/books" className="transition hover:text-success">
                Listed Books
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 font-semibold">Stay Connected</h2>

          <p className="text-sm text-base-content/70">
            Keep exploring and make every reading moment special.
          </p>

          <div className="mt-4 flex gap-3" aria-label="Social media">
            <div
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-success text-success"
            >
              <FaFacebookF />
            </div>

            <div
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-success text-success"
            >
              <FaInstagram />
            </div>

            <div
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-success text-success"
            >
              <FaGithub />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-base-300">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-base-content/60 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Book Vibe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
