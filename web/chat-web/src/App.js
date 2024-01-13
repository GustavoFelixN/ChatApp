import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login/Login.jsx';
import Chat from './pages/Chat/Chat.jsx';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/chat" element={<Chat />} />
			</Routes>
		</Router>
	);
}

export default App;
