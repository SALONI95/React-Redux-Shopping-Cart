import "./App.css";
import { CartList } from "./components/CartList";
import { ProductList } from "./components/productList";

function App() {
  return (
    <div className="bg-gray-500 min-h-screen flex items-center justify-start p-2">
      <ProductList />
      <CartList />
    </div>
  );
}

export default App;
