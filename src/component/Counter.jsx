import React, { useCallback, useMemo, useRef, useState } from 'react'


function Counter() {
	// console.log('Render Counter');
	const [number, setNumber] = useState(30);
	let num = useRef(0);

	function handleClick(e) {
		e.stopPropagation();

		setNumber(number => number + 1);
		setNumber(number => number + 1);
		setNumber(number => number + 1);
		num.current++;

		// console.log(num.current);
	}

	const fibFunctionMemoised = useCallback(function fib(n) {
		if (n === 1 || n === 2) {
			return 1
		}
		return fib(n - 1) + fib(n - 2);
	}, [])

	const fibMemoised = useMemo(() => fibFunctionMemoised(number), [number, fibFunctionMemoised]);

	return (
		<div>

			<h2>{number} {fibMemoised}</h2>
			<button
				className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition'
				onClick={handleClick}>Add</button>
		</div>
	)
}

export default Counter