import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import NotFoundPage from "@/pages/404";


export default function Routing () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<NotFoundPage/>} />
            </Routes>
        </BrowserRouter>
    );
};
