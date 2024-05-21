import React from 'react';
import { motion } from 'framer-motion';
import HighlightText from '../components/core/HomePage/HighlightText';
import { fadeIn } from '../components/common/motionFrameVarients';
import Footer from '../components/common/Footer';
import { SearchIcon } from '@heroicons/react/outline';

function Main() {
    return (
        <React.Fragment>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.div
                    variants={fadeIn('left', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.1 }}
                    className='text-center text-3xl lg:text-4xl font-semibold mt-7'
                >
                    Your Success
                    <HighlightText text={'Fuels Ours'} />
                </motion.div>

                <motion.div
                    variants={fadeIn('right', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.1 }}
                    className='mt-4 w-full text-center text-base lg:text-lg font-bold text-richblack-300'
                >
                    Discover valuable insights from any webpage Enter the URL below to uncover a wealth of information.
                </motion.div>
                
                <form className='mt-8 flex flex-col md:flex-row items-center'>
                    <div className="relative flex w-full md:w-auto md:flex-1">
                        <input
                            type='text'
                            placeholder='Enter URL for Scrapping the Customer Reviews'
                            className='border border-gray-400 rounded-l-sm rounded-r-md py-2 px-4 mr-0 focus:outline-none focus:border-blue-500 flex-1 bg-transparent text-white placeholder-gray-300'
                            style={{ minWidth: '0' }} // Remove the fixed minWidth
                        />
                        <button type='submit' className='absolute inset-y-0 right-0 bg-blue-500 text-white py-2 px-4 rounded-r-sm rounded-l-none focus:outline-none hover:bg-blue-600 flex items-center justify-center'>
                            <SearchIcon className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="relative mt-4 md:mt-0 md:ml-4">
                        <select
                            className="border border-gray-400 rounded-sm py-2 px-4 focus:outline-none focus:border-blue-500 bg-transparent text-white placeholder-gray-300"
                        >
                            <option value="amazon">Amazon</option>
                            <option value="flipkart">Flipkart</option>
                            <option value="myntra">Myntra</option>
                            <option value="nykaa">Nykaa</option>
                            <option value="walmart">Walmart</option>
                        </select>
                    </div>
                </form>

                <div className='mt-8 mb-28'>
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className='font-semibold text-2xl text-yellow-100'>Reviews (0)</h2>
                    </div>
                </div>

                <div className="flex justify-center m-4">
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-blue-600"
                    >
                        Get Analysis
                    </button>
                </div>
            </div>

            <Footer />
        </React.Fragment>
    );
}

export default Main;
