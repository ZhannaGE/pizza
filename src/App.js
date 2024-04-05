import "./scss/app.scss";
import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";


const Cart = React.lazy(()=> import("./pages/Cart"));
const FullPizza = React.lazy(() => import('./pages/FullPizza'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {

    return (
        <div className="wrapper">
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route
                            path="cart"
                            element={
                                <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
                                    <Cart />
                                </Suspense>
                            }
                        />
                        <Route
                            path="pizza/:id"
                            element={
                                <Suspense fallback={<div>Идёт загрузка...</div>}>
                                    <FullPizza />
                                </Suspense>
                            }
                        />
                        <Route
                            path="*"
                            element={
                                <Suspense fallback={<div>Идёт загрузка...</div>}>
                                    <NotFound />
                                </Suspense>
                            }
                        />
                    </Routes>
                </div>
        </div>
    );
}

export default App;
