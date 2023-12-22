import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/About/About";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../LayOut/Dashboard";
import AddTask from "../Pages/Dashboard/AddTask/AddTask";
import TaskList from "../Pages/Dashboard/TaskList";
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'about',
            element:<PrivateRoutes><About></About></PrivateRoutes>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'signUp',
            element:<SignUp></SignUp>
        }
      ]
    },
    {
      path:"dashboard",
      element:<Dashboard></Dashboard>,
     
      children:[
        {
          path:"addTask",
          element:<AddTask></AddTask>
        },
        {
          path:'taskList',
          element:<PrivateRoutes><TaskList></TaskList></PrivateRoutes>,
          loader:()=>fetch(`http://localhost:5000/addTask`)
        }
      ]
    }
  ]);