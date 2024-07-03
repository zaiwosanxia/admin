import Home from "@/pages/Home";
import Login from "@/pages/Login";
const router = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
    }
]
export default router;