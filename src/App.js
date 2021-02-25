import React from "react";
import './App.css';
import Routes from './Route';
import {useRoutes} from "hookrouter";

function App() {
	const routeResult = useRoutes(Routes);
	return (
		<>
			{routeResult || <div>Page Not Found</div>}
		</>
	);
}

export default App;
