import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import { Home } from "./pages/Home";
import { LogIn } from "./pages/LogIn";
import { Navbar } from "./pages/Navbar";
import { NotFound } from "./pages/NotFound";
import { SignUp } from "./pages/SignUp";
import { Menu } from "./pages/Menu";


const Layout = () => {

    return (
        <div>
            <Navbar />
            <BrowserRouter>
                <ScrollToTop>
                    <Switch>
                        <Route exact path="/">
                            <Menu />
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