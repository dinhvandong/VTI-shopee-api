import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductCreatePage from "./pages/ProductCreatePage";
import ProductUpdatePage from "./pages/ProductUpdatePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />}></Route>

        <Route path="/homepage" element={<HomePage />}>
        </Route>
        <Route path="/product/findAll" element={<ProductsPage />}>
        </Route>
        <Route path="/product/create" element={<ProductCreatePage />}>
        </Route>
        <Route path="/product/update/:id" element={<ProductUpdatePage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}