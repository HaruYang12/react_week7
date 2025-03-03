import { useState } from "react";
import Login from './pages/Login';
import Product from './pages/Product';



function App() {
  const [isAuth, setIsAuth] = useState(false); //使用者還沒登入前為false狀態




  return (
    <>
    {isAuth ? <Product setIsAuth={setIsAuth} /> : <Login setIsAuth={setIsAuth} />}
    </>
  )
}

export default App