import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = React.useState(0);

    function handleClick(e) {
        e.stopPropagation();
        setCount(count + 1);
        console.log(count);
    }
    return (
        <div>
            <h2>{count}</h2>
            <button
                className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition'
                onClick={handleClick}>Add</button>
        </div>
    )
}

export default Counter