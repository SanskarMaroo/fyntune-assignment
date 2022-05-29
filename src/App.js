import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import AddExpense from "./pages/AddExpense";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-expense" element={<AddExpense />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
