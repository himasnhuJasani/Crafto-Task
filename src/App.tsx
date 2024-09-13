import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "pages/LoginPage";
import QuoteListPage from "pages/QuotesPage";
import QuoteCreationPage from "pages/QuotesCreationPage";
import PrivateRoute from "PrivateRoute";

function App() {
	const auth = !!localStorage.getItem('LoginAuthToken');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
		<Route element={<PrivateRoute isAuthenticated={auth} redirectPath="/" />}>
		<Route path="/quotes" element={<QuoteListPage />} />
        <Route path="/create-quote" element={<QuoteCreationPage />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
