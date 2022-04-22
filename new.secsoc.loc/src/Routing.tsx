import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import NotFoundPage from "~pages/404";
import MainLayout from "~components/layouts/MainLayout";


export default function Routing () {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path={'/'} element={<NotFoundPage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
