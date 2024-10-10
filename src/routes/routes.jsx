import Layout from "../component/layout/Layout";
import SignupPage from "../pages/hompage/SignupPage";

export const ROUTE=[
    {
        path: "/",
        element: <Layout/>,
    },

    {
        path: "/signUp",
        element: <SignupPage></SignupPage>
    }
]