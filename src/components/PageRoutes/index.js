import { useDispatch, useSelector } from "react-redux"
import NoAccessPage from "../../pages/NoAccessPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "../../pages/MainPage"
import UserPage from "../../pages/UserPage"
import { useEffect } from "react"
import { getAutorizedUser } from "../../redux/actions/users"
import { Bars } from "react-loader-spinner"
import './style.css'

const autorizedRoutes = [
    { path: '/', element: <MainPage />, exact: true },
    { path: '/:id', element: <UserPage />, exact: true },
]


const PageRoutes = () => {
    const autorizedUser = useSelector(state => state.users.autorizedUser);
    const isLoading = useSelector(state => state.users.isUserLoading)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAutorizedUser())
    }, [])

    if (isLoading) {
        return (<div className="pageRiutesLoader">
            <Bars width={80} height={80} color="#000bff"></Bars>
            </div>

        )
    }
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {autorizedUser ? autorizedRoutes.map((route) => <Route {...route} key={route.path} />) : <Route path='/' element={<NoAccessPage />} exact />}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default PageRoutes