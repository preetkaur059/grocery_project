import React from 'react'

const Heading = (props) => {
    return (
        
            <div className="md:text-5xl text-4xl w-fit mx-auto font-bold">
                <h2><span className='text-orange-500'>{props.highlight} </span>{props.heading}</h2>
                <div className="md:w-35 w-30 h-1.5 bg-orange-500 md:mt-6 mt-3 ml-auto "></div>
            </div>
       
    )
}

export default Heading
