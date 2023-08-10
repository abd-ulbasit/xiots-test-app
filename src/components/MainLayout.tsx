import { usePostsStore } from '@/store/posts';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FaHome, FaMailBulk, FaPhoneVolume } from "react-icons/fa"
import { FiPhone } from "react-icons/fi"
import Footer from './Footer';
interface NavbarProps {
    // Add props for the navbar
    children: React.ReactNode;
}

const MainLayout: React.FC<NavbarProps> = ({ children }) => {

    const [showLinks, setShowLinks] = useState(false);
    const setPosts = usePostsStore(state => state.setPosts)
    //fetch posts and store then as posts
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const newPosts = (await res.json()) as PostType[];
            setPosts(newPosts);
        };
        fetchPosts();
    }, [])
    const router = useRouter();

    const handleToggle = () => {
        setShowLinks(!showLinks);
    };

    const isCurrentPage = (page: string) => {
        console.log(router.pathname);

        return router.pathname === page;

    };

    return (
        <>

            <nav >
                <div className="h-24 pl-6 pr-10 flex-wrap flex items-center justify-between" >

                    <div className="flex items-center w-1/4">
                        <h1 className=" text-2xl mr-4 italic font-bold font-sans"> Logo</h1>
                    </div>
                    <button
                        className="text-2xl md:hidden "
                        onClick={handleToggle}
                    >
                        &#9776;
                    </button>
                    <div
                        className={`  md:flex flex-row hidden flex-grow md:items-center  gap-3 justify-between `}
                    >
                        <div className='flex-row flex items-center gap-2'>
                            <div className='text-yellow-400 p-2 border-yellow-400 rounded-full border'>
                                <FaHome></FaHome>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <div className='text-yellow-400 font-bold'> Address</div>
                                <div className='text-gray-800 text-sm'> Example England</div>
                            </div>
                        </div>
                        <div className='flex-row flex items-center gap-2'>
                            <div className='text-yellow-400 p-2 border-yellow-400 rounded-full border'>
                                <FaMailBulk></FaMailBulk>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <div className='text-yellow-400 font-bold'>Email Us</div>
                                <div className='text-gray-800 text-sm'> example@booking.com</div>
                            </div>
                        </div>
                        <div className='flex-row flex items-center gap-2 relative '>
                            <div className='absolute -top-12 pt-10 p-2 bg-gray-800 rounded-b-full '>
                                <div className='text-white bg-gray-600 p-2 border-white  rounded-full border'>
                                    <FaPhoneVolume></FaPhoneVolume>
                                </div>
                            </div>
                            <p className='text-gray-800 text-sm ml-16'>+92-321343241</p>
                        </div>
                    </div>
                </div>
                <div
                    className={`${showLinks ? 'block' : 'hidden'
                        } md:hidden flex flex-col  md:items-center px-6 gap-3`}
                >
                    <div className='flex-row flex items-center gap-2'>
                        <div className='text-yellow-400 p-2 border-yellow-400 rounded-full border'>
                            <FaHome></FaHome>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='text-yellow-400 font-bold'> Address</div>
                            <div className='text-gray-800 text-sm'> Example England</div>
                        </div>
                    </div>
                    <div className='flex-row flex items-center gap-2'>
                        <div className='text-yellow-400 p-2 border-yellow-400 rounded-full border'>
                            <FaMailBulk></FaMailBulk>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='text-yellow-400 font-bold'>Email Us</div>
                            <div className='text-gray-800 text-sm'> example@booking.com</div>
                        </div>
                    </div>
                    <div className='flex-row flex items-center gap-2 pb-2'>
                        <div className='text-yellow-400 p-2 border-yellow-400 rounded-full border'>
                            <FiPhone></FiPhone>
                        </div>
                        <div className='flex flex-col gap-1'>
                            {/* <div className='text-yellow-400'> Address</div>
                            <div className='text-gray-800 text-sm'> Example England</div> */}
                            <p className='text-gray-800 text-sm font-bold'>+92-321343241</p>
                        </div>
                    </div>
                </div>
            </nav>
            <ul className="md:flex hidden flex-row px-6 w-full h-16 items-center gap-3 bg-slate-800 ">
                <li className={` ${isCurrentPage('/') ? 'text-yellow-400' : ''}`}>
                    <Link href="/" className="hover:text-gray-300 md:mx-4 block">
                        Home
                    </Link>
                </li>
                <li className={` ${isCurrentPage('/posts') ? 'text-yellow-400' : ''}`}>
                    <Link href="/posts" className="hover:text-gray-300 md:mx-4 block">
                        Posts
                    </Link>
                </li>
            </ul>
            {children}
            <Footer></Footer>

        </>
    );
};

export default MainLayout;
