import './App.css';
import useTimeOut from './hooks/useTimeOut';

function App() {
	const [count, incrementFlag, resetFlag, increment, pauseCount, resetCount] =
		useTimeOut();
	return (
		<div>
			{count}
			<br />
			<button
				onClick={(e) => {
					!incrementFlag ? increment(e) : pauseCount(e);
				}}
			>
				{!incrementFlag ? 'start' : 'pause'}
			</button>
			<br />
			{resetFlag && <button onClick={resetCount}> reset </button>}
		</div>
	);
}

export default App;
