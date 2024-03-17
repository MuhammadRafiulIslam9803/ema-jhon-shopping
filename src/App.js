
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Shop from './Components/Shop/Shop';
import Main from './layout/Main';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Order from './Components/Order/Order';
import { loaderAndProduct } from './Utilities/loader';

function App() {
  const router = createBrowserRouter([
  { path : '/',
   element : <Main></Main> ,
  children : [
    {path : 'shop', element :<Shop></Shop> },
    {path : 'home', element :<Home></Home> },
    {path : 'shop', element :<Shop></Shop> },
    {path : 'order',
    loader :loaderAndProduct,
    element :<Order></Order> },
    {path : 'about', element :<About></About> },
  ]
  },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
