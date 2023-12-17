import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Calculator } from '../pages/Calculator';
import { LeadForm } from '../pages/LeadForm';

export const AppRoute = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<LeadForm />}
			/>
			<Route
				path="/people"
				element={<Home />}
			/>
			<Route
				path="/total"
				element={<Calculator />}
			/>
		</Routes>
	);
};
