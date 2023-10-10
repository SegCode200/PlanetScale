import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/block/Layout"
import Homepage from "../pages/Homepage"



export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Homepage/>
            }
        ]

    }
])