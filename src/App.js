import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import MainContainer from './components/MainContainer';
import { Header } from './components/Header';
import WatchPage from './components/WatchPage';
import { Provider } from 'react-redux';
import store from './utils/store';

const routes = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:'/',
      element:<MainContainer />
    },
    {
      path:'/',
      element:<WatchPage />
    }
  ]
}])
function App() {
  return (
    <Provider store={store}>
    <div className=''>
     <Header/>
      <RouterProvider router={routes} />
    </div>
    </Provider>
  );
}

export default App;
