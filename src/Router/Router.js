import { createBrowserRouter } from "react-router-dom";
import Blog from "../Component/Home/Blog/Blog";
import Home from "../Component/Home/Home/Home";
import Order from "../Component/Home/Order/Order";
import Orderlist from "../Component/Home/OrderList/Orderlist";
import Service from "../Component/Home/Service/Service";
import Layout from "../Component/Main/Layout";
import MyReview from "../Component/Shared/Comment/MyReview/MyReview";
import Error from "../Component/Shared/Error/Error";
import Menu from "../Component/Shared/Menu/Menu";
import SingleMenu from "../Component/Shared/Menu/SingleMenu";
import SignIn from "../Component/SignIn/SignIn";
import SignUp from "../Component/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";

export const Router =createBrowserRouter([
    {path:'/',element:<Layout></Layout>,children:[
        {path:'/menus',element:<PrivateRouter><Menu></Menu></PrivateRouter>,
        loader: ()=>fetch(`https://chef-kitchen-server.vercel.app/foodservice/0`)},
        {path:'/menu/:id',element:<SingleMenu></SingleMenu>,
        loader: ({params})=>fetch(`https://chef-kitchen-server.vercel.app/menu/${params.id}`)},
        {path:'/order/:id',element:<PrivateRouter><Order></Order></PrivateRouter>,
        loader: ({params})=>fetch(`https://chef-kitchen-server.vercel.app/menu/${params.id}`)},
        {path:'/orderlist',element:<PrivateRouter><Orderlist></Orderlist></PrivateRouter>,loader: ()=>fetch(`https://chef-kitchen-server.vercel.app/list`)},
        {path:'/signin',element:<SignIn></SignIn>},
        {path:'/signup',element:<SignUp></SignUp>},
        {path:'/myreview',element:<PrivateRouter><MyReview></MyReview></PrivateRouter>},
        {path:'/blog',element:<Blog></Blog>},
        {path:'/',element:<Home></Home>,children:[
            {path:'/service/:id',
            element:<Service></Service>,
            loader: ({params})=>fetch(`https://chef-kitchen-server.vercel.app/foodservice/${params.id}`)},
            {path:'/',
            element:<Service></Service>,
            loader: ()=>fetch(`https://chef-kitchen-server.vercel.app/foodservice/0`)}
            
        ]},
        {path:'*',element:<Error></Error>}        
    ]}
])