import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import Entry from "./Entry";
import Layout from "./Layout";
import Newsfeed from "./Newsfeed";
const router=createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {path:'/', element:<Entry/>},
            {path:'/newsfeed', element:<Newsfeed/>},
            {path:'/dashboard', element:<Dashboard/>},
        ]

    }
])
export default router;