import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

interface NavbarProps {
    // Add any props you might need for the navbar
}

const Navbar: React.FC<NavbarProps> = () => {
    const [showLinks, setShowLinks] = useState(false);

    const router = useRouter();

    const handleToggle = () => {
        setShowLinks(!showLinks);
    };

    const isCurrentPage = (page: string) => {
        console.log(router.pathname);

        return router.pathname === page;

    };

    return (
        <section>

            <nav className="bg-gray-800 p-4 flex items-center justify-between">
                <div className="flex items-center">
                    <h1 className="text-white text-2xl mr-4">Your Logo</h1>
                </div>
                <button
                    className="text-white text-2xl md:hidden"
                    onClick={handleToggle}
                >
                    &#9776;
                </button>
                <ul
                    className={`${showLinks ? 'block' : 'hidden'
                        } md:flex flex-col md:flex-row md:items-center`}
                >
                    <li className="my-2 md:my-0">
                        <Link
                            href="#"
                            className="text-white hover:text-gray-300 md:mx-4 block"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="my-2 md:my-0">
                        <Link
                            href="#"
                            className="text-white hover:text-gray-300 md:mx-4 block"
                        >
                            About
                        </Link>
                    </li>
                    <li className="my-2 md:my-0">
                        <Link
                            href="#"
                            className="text-white hover:text-gray-300 md:mx-4 block"
                        >
                            Services
                        </Link>
                    </li>
                    <li className="my-2 md:my-0">
                        <Link
                            href="#"
                            className="text-white hover:text-gray-300 md:mx-4 block"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <ul className="md:flex flex-col md:flex-row md:items-center ">
                <li className={`my-2 md:my-0 ${isCurrentPage('/') ? 'text-red-500' : 'text-white'}`}>
                    <Link href="/" className="hover:text-gray-300 md:mx-4 block">
                        Home
                    </Link>
                </li>
                <li className={`my-2 md:my-0 ${isCurrentPage('posts') ? 'text-red-500' : 'text-white'}`}>
                    <Link href="/posts" className="hover:text-gray-300 md:mx-4 block">
                        Posts
                    </Link>
                </li>
            </ul>

        </section>
    );
};

export default Navbar;
