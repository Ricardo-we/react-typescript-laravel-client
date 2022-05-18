// import './assests/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tasks from './views/Tasks';
import UpdateTask from './views/UpdateTask';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Tasks/>}/>
				<Route path="/:taskId" element={<UpdateTask/>}/>
			</Routes>
		</BrowserRouter>		
	)
}

export default App;
