import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HighlightText from '../components/core/HomePage/HighlightText';
import { fadeIn } from '../components/common/motionFrameVarients';
import Footer from '../components/common/Footer';
import { UploadIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';

function Main() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileUploaded, setFileUploaded] = useState(false);
    const [categoryData, setCategoryData] = useState(null);
    const [analysisData, setAnalysisData] = useState(null);

    const navigate = useNavigate();

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setFileUploaded(false);  // Reset the state if a new file is selected
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!selectedFile) {
            alert('Please select a file to upload');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await fetch('http://localhost:8080/upload', {
                method: 'POST',
                body: formData,
            });
            const result = await response.json();
            console.log('File uploaded successfully:', result);
            setFileUploaded(true);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    const getCategory = async () => {
        try {
            const response = await fetch('http://localhost:8000/get-category', {
                method: 'GET',
            });
            const result = await response.json();
            setCategoryData(result);
            console.log('Category data:', result);
        } catch (error) {
            console.error('Error fetching category data:', error);
        }
    };

    const handleAnalysisClick = () => {
        navigate('/trace/analysis');
    };

    return (
        <React.Fragment>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 pb-2'>
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
                    Upload an image to get insights. Enter the URL below to uncover a wealth of information.
                </motion.div>
                
                <form className='mt-8 flex flex-col items-center' onSubmit={handleSubmit}>
                    <div 
                        className='relative flex flex-col items-center w-full md:w-auto md:flex-1 border-2 border-dashed border-blue-500 p-6 rounded-md bg-gray-100'
                        style={{ width: '38%' }} // Ensure the width is consistent
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => {
                            e.preventDefault();
                            const files = e.dataTransfer.files;
                            if (files.length) {
                                setSelectedFile(files[0]);
                                setFileUploaded(false);  // Reset the state if a new file is dropped
                            }
                        }}
                    >
                        <UploadIcon className="h-10 w-10 text-blue-500 mb-4" />
                        {selectedFile ? (
                            <div className='text-center'>
                                <img src={URL.createObjectURL(selectedFile)} alt={selectedFile.name} className="mb-2 w-32 h-32 object-cover" />
                                <p>{selectedFile.name}</p>
                                <p className="text-sm">{(selectedFile.size / 1024).toFixed(2)} KB</p>
                            </div>
                        ) : (
                            <div className="text-center text-gray-500">
                                <p>Drop your images here or <span className="text-blue-500 cursor-pointer" onClick={() => document.getElementById('fileInput').click()}>browse</span>.</p>
                                <button
                                    type='button'
                                    onClick={() => document.getElementById('fileInput').click()}
                                    className='mt-4 bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-blue-600'
                                >
                                    Select Image
                                </button>
                                <input
                                    id='fileInput'
                                    type='file'
                                    accept='image/*'
                                    onChange={handleFileChange}
                                    className='hidden'
                                />
                            </div>
                        )}
                    </div>

                    <button
                        type='submit'
                        className='mt-4 bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-blue-600 flex items-center justify-center'
                        style={{ width: '38%' }} // Ensure the button width matches the input field width
                    >
                        Upload Image
                    </button>
                </form>
                {/* {fileUploaded && ( */}
                { (
                <div className='mt-4 flex justify-center space-x-4' >
                    <button
                        onClick={getCategory}
                        className='bg-yellow-500 text-white py-2  rounded-md focus:outline-none hover:bg-yellow-600 flex items-center justify-center'
                        style={{ width: '18.5%' }}
                    >
                        Get Category
                    </button>
                    <button
                        onClick={handleAnalysisClick}
                        className='bg-yellow-500 text-white py-2  rounded-md focus:outline-none hover:bg-yellow-600 flex items-center justify-center'
                        style={{ width: '18.5%' }}
                    >
                        Get Analysis
                    </button>
                </div>
            )}

                {categoryData && (
                    <div className='mt-4'>
                        <h3 className='text-lg font-bold'>Category Data:</h3>
                        <pre className='bg-gray-100 p-4 rounded-md'>{JSON.stringify(categoryData, null, 2)}</pre>
                    </div>
                )}
            </div>

            <Footer />
        </React.Fragment>
    );
}

export default Main;
