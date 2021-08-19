import React, {useState} from 'react';

import {css} from '@emotion/css';
import { useRoutes } from 'react-router-dom';
import Nav from './Nav';
import Admin from './Admin'
import Products from './Products';

const AppSyles = css`
  margin: 50px auto;
  width: 380px;
  .Container{
    background: #1d1e26;
    border: 4px solid #9580ff;
    border-radius: 6px;
    padding: 25px;
  }
`

const App = () => {
  const [admin] = useState(true)

  const routes = useRoutes([
    {
      path:"/",
      element:<div>Homepage</div>,
    },
    {
      path:"/admin",
      // ternary operator
      element: admin ? <Admin /> : <div>Not Admin</div>,
    },
    {
      path:"/products",
      element:<Products />,
    },
    {
      path:"*",
      element:<div>Not Found</div>,
    }
  ])

  return routes;
  
  // (
  //   <Routes> {/* routes untuk menunjuk spesifik element/komponent  */}
  //     {/*Route untuk declare bahwa komponen berikut menggunakan router utk navigasi */}
  //     Tanpa menggukana useRoutes
  //     <Route path="/" element={<div>Homepage</div>}/>
  //     <Route path="/admin" element={<Admin />}/>
  //     <Route path="/products" element={<Products />} />
  //     <Route path="*" element={<div>Not Found</div>} />  
  //   </Routes> 
  // )
}

const AppWrapper = () => {
  return(
    <div className={AppSyles}>
      <div className="Container">
        <Nav />
        <App />
      </div>
    </div>
  )
}
 
export default AppWrapper;
