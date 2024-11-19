import { Routes,Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout/Index";

export function Router() {
    return (
        <Routes>
            <Route path='/' element= {<DefaultLayout/>}>
                 
            </Route>
        </Routes>
    )
}