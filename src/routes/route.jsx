import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'

function route() {
const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/signup',
        element:<Signup/>
    },
    {
        path:'/login',
        element:<Login/>
    }
])
return <RouterProvider router={router}/>
}

export default route
