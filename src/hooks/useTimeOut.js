import { useState, useRef } from 'react';

const useTimeOut = () => {
	const [count, setCount] = useState(0);
	const [incrementFlag, setIncrementFlag] = useState(false);
	const [resetFlag, setResetFlag] = useState(false);

	const pause = useRef(false);

	let interval = useRef(null);

	const increment = () => {
		console.log('increment');
		setIncrementFlag(true);
		interval.current = setInterval(() => {
			if (!pause.current) {
				setCount((count) => count + 1);
			}
		}, 1000);
	};
	const pauseCount = () => {
		pause.current = true;
		setResetFlag(true);
	};

	const resetCount = () => {
		setCount(0);
		pause.current = false;
		setResetFlag(false);
		setIncrementFlag(false);
		clearInterval(interval.current);
	};
	return [count, incrementFlag, resetFlag, increment, pauseCount, resetCount];
};

export default useTimeOut;
