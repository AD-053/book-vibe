import React from 'react';
import { Link } from 'react-router';

const Errorpage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 flex items-center justify-center px-6">
            <div className="max-w-xl w-full text-center">

                {/* 404 */}
                <h1 className="text-[140px] md:text-[180px] font-black leading-none 
                               bg-gradient-to-r from-purple-600 to-indigo-600 
                               bg-clip-text text-transparent">
                    404
                </h1>

                {/* Content */}
                <div className="-mt-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Page Not Found
                    </h2>

                    <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
                        Sorry, we couldn't find the page you're looking for.
                        It may have been moved, deleted, or the URL might be incorrect.
                    </p>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold
                                   hover:bg-purple-700 transition duration-300 shadow-lg shadow-purple-200"
                    >
                        ← Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-3 rounded-xl bg-white text-gray-700 font-semibold
                                   border border-gray-200 hover:bg-gray-50 transition duration-300"
                    >
                        Go Back
                    </button>
                </div>

                {/* Small footer */}
                <p className="mt-10 text-sm text-gray-400">
                    Error Code: 404
                </p>

            </div>
        </div>
    );
};

export default Errorpage;