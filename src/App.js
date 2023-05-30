import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Products from './components/Products';
import RootLayout from './components/RootLayout';
import Cart from './components/Cart';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>} >
        <Route index element={<Products/>} />
        <Route path="/cart" element={<Cart/>} />
      </Route>
  ));

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
