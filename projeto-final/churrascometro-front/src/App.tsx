import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoute } from './routes';
import { ThemeProvider } from './context/ThemeContext';

function App() {
	return (
		<Router>
			<ThemeProvider>
				<AppRoute />
			</ThemeProvider>
		</Router>
	);
}

export default App;
