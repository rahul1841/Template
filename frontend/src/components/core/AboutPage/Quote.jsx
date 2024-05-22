import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
  return (
    <div className=" text-xl md:text-3xl font-medium mx-auto py-5 pb-20 text-center text-white">
       Transforming aviation maintenance with advanced solutions for safer, more efficient flights. Our platform
        <HighlightText text={"simplifies maintenance tasks"} />,{" "}
        <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
            {" "}
            ensuring aircraft are always in top condition.
        </span>
        Experience hassle-free operations with our user-friendly tools,
        
        <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
            {" "}
            making aircraft maintenance easier and more effective for airlines worldwide.
        </span> 
    </div>
  )
}

export default Quote