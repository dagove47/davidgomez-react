import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";

import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { LogIn } from "./pages/LogIn";
import { NotFound } from "./pages/NotFound";


const Layout = () => {

    return (
        <div>
            <p>NAVBAR</p>
            <BrowserRouter>
                <ScrollToTop>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/signup">
                            <SignUp />
                        </Route>
                        <Route exact path="/login">
                            <LogIn />
                        </Route>
                        <NotFound />
                    </Switch>
                </ScrollToTop>
            </BrowserRouter>
        </div>

    );
};

//export default injectContext(Layout);
export default Layout;