import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Chat from './pages/Chat/Chat.jsx';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Chat />} />
			</Routes>
		</Router>
	);
}

export default App;
