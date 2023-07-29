"use client";
import {useState} from "react";
import Input from "./input";


const Navbar = ({
                    signUp = "outlined",
                    logIn = "contained",
                }: {
    signUp?: "contained" | "outlined";
    logIn?: "contained" | "outlined";
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <div className='border-y-2 border-offWhite'>
            <div className='bg-gray-100 dark-mode:bg-gray-900 antialiased'>
                <div className='w-full bg-white dark-mode:bg-gray-800 dark-mode:text-gray-200 text-gray-700'>
                    <div
                        className='flex flex-col max-w-screen-xl px-4 mx-auto
          md:items-center md:justify-between md:flex-row md:px-6 lg:px-8'
                    >
                        <div className='flex flex-row items-center justify-between p-4'>
                            <a
                                href='#'
                                className='rounded-lg text-lg font-semibold uppercase tracking-widest dark-mode:text-white text-gray-900 focus:shadow-outline focus:outline-none'
                            >
                                Flowtrail UI
                            </a>
                            <button
                                className='rounded-lg focus:shadow-outline focus:outline-none md:hidden'
                                onClick={toggleMenu}
                            >
                                <svg
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                    className='h-6 w-6'
                                >
                                    <path
                                        style={{display: isOpen ? "none" : "block"}}
                                        fillRule='evenodd'
                                        d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
                                        clipRule='evenodd'
                                    ></path>
                                    <path
                                        style={{display: isOpen ? "block" : "none"}}
                                        fillRule='evenodd'
                                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                                        clipRule='evenodd'
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <nav
                            className={`flex-col flex-grow gap-5 md:ml-8 md:items-center ${
                                isOpen ? "flex" : "hidden"
                            } md:pb-0 md:flex md:justify-end md:flex-row `}
                        >
                            <ul className='flex flex-col gap-2 pl-4 md:flex-row'>
                                <li>
                                    <a href='' className='font-semibold'>
                                        Shop
                                    </a>
                                </li>
                                <li>
                                    <a href='' className=''>
                                        Men
                                    </a>
                                </li>
                                <li>
                                    <a href='' className=''>
                                        Women
                                    </a>
                                </li>
                                <li>
                                    <a href='' className=''>
                                        Combos
                                    </a>
                                </li>
                                <li>
                                    <a href='' className=''>
                                        Joggers
                                    </a>
                                </li>
                            </ul>

                            <Input icon='/svgs/search.svg'/>
                            <ul className='flex items-center gap-2'>
                                <li>
                                    <button className='rounded-sm p-2 bg-offWhite'>
                                        <svg
                                            width='15'
                                            height='15'
                                            viewBox='0 0 20 20'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                fill-rule='evenodd'
                                                clip-rule='evenodd'
                                                d='M9.99486 4.93005C8.49535 3.18253 5.99481 2.71245 4.11602 4.31265C2.23723 5.91285 1.97273 8.58831 3.44815 10.4809C4.67486 12.0544 8.38733 15.3731 9.60407 16.4473C9.7402 16.5674 9.80827 16.6275 9.88766 16.6511C9.95695 16.6717 10.0328 16.6717 10.1021 16.6511C10.1815 16.6275 10.2495 16.5674 10.3857 16.4473C11.6024 15.3731 15.3149 12.0544 16.5416 10.4809C18.017 8.58831 17.7848 5.89602 15.8737 4.31265C13.9626 2.72929 11.4944 3.18253 9.99486 4.93005Z'
                                                stroke='#807D7E'
                                                stroke-width='1.5'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                            />
                                        </svg>
                                    </button>
                                </li>
                                <li>
                                    <button className='rounded-sm p-2 bg-offWhite'>
                                        <svg
                                            width='15'
                                            height='15'
                                            viewBox='0 0 20 20'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                d='M9.99992 11.6667C12.3011 11.6667 14.1666 9.8012 14.1666 7.50001C14.1666 5.19882 12.3011 3.33334 9.99992 3.33334C7.69873 3.33334 5.83325 5.19882 5.83325 7.50001C5.83325 9.8012 7.69873 11.6667 9.99992 11.6667ZM9.99992 11.6667C6.31802 11.6667 3.33325 13.9053 3.33325 16.6667M9.99992 11.6667C13.6818 11.6667 16.6666 13.9053 16.6666 16.6667'
                                                stroke='#807D7E'
                                                stroke-width='1.5'
                                                stroke-linecap='round'
                                            />
                                        </svg>
                                    </button>
                                </li>
                                <li>
                                    <button className='rounded-sm p-2 bg-offWhite'>
                                        <svg
                                            width='15'
                                            height='15'
                                            viewBox='0 0 20 20'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                d='M2.5 3.33334H3.00526C3.85578 3.33334 4.56986 3.97376 4.6621 4.81926L5.3379 11.0141C5.43014 11.8596 6.14422 12.5 6.99474 12.5H14.205C14.9669 12.5 15.6317 11.9834 15.82 11.2452L16.9699 6.73593C17.2387 5.68213 16.4425 4.65742 15.355 4.65742H5.5M5.52063 15.5208H6.14563M5.52063 16.1458H6.14563M14.6873 15.5208H15.3123M14.6873 16.1458H15.3123M6.66667 15.8333C6.66667 16.2936 6.29357 16.6667 5.83333 16.6667C5.3731 16.6667 5 16.2936 5 15.8333C5 15.3731 5.3731 15 5.83333 15C6.29357 15 6.66667 15.3731 6.66667 15.8333ZM15.8333 15.8333C15.8333 16.2936 15.4602 16.6667 15 16.6667C14.5398 16.6667 14.1667 16.2936 14.1667 15.8333C14.1667 15.3731 14.5398 15 15 15C15.4602 15 15.8333 15.3731 15.8333 15.8333Z'
                                                stroke='#807D7E'
                                                stroke-width='1.5'
                                                stroke-linecap='round'
                                            />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
