import App from "./App";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: 'Home'
            },
            {
                path: 'flex',
                element: 'Flex'
            },
            {
                path: 'grid',
                element: 'Grid'
            }
        ]
    }
])

export default router;