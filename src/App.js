import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	const [mode, setMode] = useState('light'); //Weather Dark Mode is enabled or not.
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 1500);
	};

	const removeBodyClasses = () => {
		document.body.classList.remove('bg-primary');
		document.body.classList.remove('bg-success');
		document.body.classList.remove('bg-warning');
		document.body.classList.remove('bg-danger');
		document.body.classList.remove('bg-light');
		document.body.classList.remove('bg-dark');
	};

	const toggleMode = (cls) => {
		removeBodyClasses();
		document.body.classList.add('bg-' + cls);
		if (mode === 'light') {
			setMode('dark');
			document.body.style.backgroundColor = '#042743';
			showAlert('Dark Mode has been Enable', 'success');
			//document.title = "Textutils - Dark Mode "
		} else if (mode === 'dark') {
			setMode('light');
			document.body.style.backgroundColor = 'white';
			showAlert('Light Mode has been Enable', 'success');
			//document.title = "Textutils - Light Mode "
		}
	};
	return (
		<>
			<Router>
				<Navbar title='TextUtils' aboutText='About Us' mode={mode} toggleMode={toggleMode} />
				<Alert alert={alert} />
				{/* <Navbar /> */}
				<div className='container my-3'>
					<Switch>
						<Route exact path='/about'>
							<About mode={mode} />
						</Route>
						<Route exact path='/'>
							<TextForm showAlert={showAlert} heading='Try TextUtils - Word Counter, Character Counter, Remove Extra Space ' mode={mode} />
						</Route>
					</Switch>
				</div>
			</Router>
		</>
	);
}

export default App;
