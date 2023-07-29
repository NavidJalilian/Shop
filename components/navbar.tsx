"use client";
import {useState} from "react";
import Input from "./input";
import Button from "./button";
import StyledLink from "./link";

const Navbar = ({
                    signUp = "outlined",
                    logIn = "contained",
                }: {
    signUp: "contained" | "outlined";
    logIn: "contained" | "outlined";
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
                            className={`flex-col flex-grow gap-3  ${
                                isOpen ? "flex" : "hidden"
                            } pb-4 md:pb-0 md:flex md:justify-end md:flex-row `}
                        >
                            <Input icon='/svgs/search.svg'/>
                            <StyledLink href='/signIn' variant={logIn}>
                                Login
                            </StyledLink>
                            <Button variant={signUp}>Sign Up</Button>

                            {/* <div className='relative' onClick={toggleMenu}>
                <button className='mt-2 flex w-full flex-row items-center rounded-lg bg-transparent dark-mode:bg-transparent bg-gray-200 px-4 py-2 text-left text-sm font-semibold text-gray-900 dark-mode:hover:bg-gray-600 dark-mode:hover:text-white hover:bg-gray-200 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white hover:text-gray-900 focus:shadow-outline focus:bg-gray-200 focus:text-gray-900 focus:outline-none md:mt-0 md:ml-4 md:inline md:w-auto'>
                  <span>More</span>
                  <svg
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </button>
                {isOpen && (
                  <div className='absolute right-0 mt-2 w-full origin-top-right md:w-screen md:max-w-screen-sm'>
                    <div className='rounded-md bg-white dark-mode:bg-gray-700 px-2 pt-2 pb-4 shadow-lg'>
                      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                        <a
                          className='flex items-start rounded-lg bg-transparent p-2 dark-mode:text-gray-200 row dark-mode:hover:bg-gray-600 dark-mode:hover:text-white hover:bg-gray-200 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white hover:text-gray-900 focus:shadow-outline focus:bg-gray-200 focus:text-gray-900 focus:outline-none'
                          href='#'
                        >
                          <div className='rounded-lg bg-teal-500 p-3 text-white'>
                            <svg
                              fill='none'
                              stroke='currentColor'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              viewBox='0 0 24 24'
                              className='h-4 w-4 md:h-6 md:w-6'
                            >
                              <path d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'></path>
                            </svg>
                          </div>
                          <div className='ml-3'>
                            <p className='font-semibold'>Appearance</p>
                            <p className='text-sm'>Easy customization</p>
                          </div>
                        </a>

                        <a
                          className='flex items-start rounded-lg bg-transparent p-2 dark-mode:text-gray-200 row dark-mode:hover:bg-gray-600 dark-mode:hover:text-white hover:bg-gray-200 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white hover:text-gray-900 focus:shadow-outline focus:bg-gray-200 focus:text-gray-900 focus:outline-none'
                          href='#'
                        >
                          <div className='rounded-lg bg-teal-500 p-3 text-white'>
                            <svg
                              fill='none'
                              stroke='currentColor'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              viewBox='0 0 24 24'
                              className='h-4 w-4 md:h-6 md:w-6'
                            >
                              <path d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'></path>
                            </svg>
                          </div>
                          <div className='ml-3'>
                            <p className='font-semibold'>Comments</p>
                            <p className='text-sm'>
                              Check your latest comments
                            </p>
                          </div>
                        </a>

                        <a
                          className='flex items-start rounded-lg bg-transparent p-2 dark-mode:text-gray-200 row dark-mode:hover:bg-gray-600 dark-mode:hover:text-white hover:bg-gray-200 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white hover:text-gray-900 focus:shadow-outline focus:bg-gray-200 focus:text-gray-900 focus:outline-none'
                          href='#'
                        >
                          <div className='rounded-lg bg-teal-500 p-3 text-white'>
                            <svg
                              fill='none'
                              stroke='currentColor'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              viewBox='0 0 24 24'
                              className='h-4 w-4 md:h-6 md:w-6'
                            >
                              <path d='M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z'></path>
                              <path d='M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z'></path>
                            </svg>
                          </div>
                          <div className='ml-3'>
                            <p className='font-semibold'>Analytics</p>
                            <p className='text-sm'>
                              Take a look at your statistics
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div> */}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
