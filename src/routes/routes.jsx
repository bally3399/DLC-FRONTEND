import Layout from "../component/layout/Layout";
import LoginPage from "../pages/hompage/LoginPage";
import SignupPage from "../pages/hompage/SignupPage";

export const ROUTE=[
    {
        path: "/",
        element: <Layout/>,
    },
    {
        path: "/signUp",
        element: <SignupPage></SignupPage>
    },
    {
        path: "/login",
        element: <LoginPage/>
    }
]