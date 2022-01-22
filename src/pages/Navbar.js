import React from "react";

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark  fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="dfg">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse me-auto" id="navbarTogglerDemo02">
                    <div class="me-auto"></div>
                    <div className="d-flex">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="dfg">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="df">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="fdg" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        // <nav className="fixed-top">
        //     <div class="collapse" id="navbarToggleExternalContent">
        //         <div class="bg-dark p-4">
        //             <h5 class="text-white h4">Collapsed content</h5>
        //             <h5 class="text-white h4">Collapsed content</h5>
        //             <h5 class="text-white h4">Collapsed content</h5>
        //             <h5 class="text-white h4">Collapsed content</h5>
        //             <span class="text-muted">Toggleable via the navbar brand.</span>
        //             <span class="text-muted">Toggleable via the navbar brand.</span>
        //             <span class="text-muted">Toggleable via the navbar brand.</span>
        //             <span class="text-muted">Toggleable via the navbar brand.</span>
        //         </div>
        //     </div>
        //     <nav class="navbar navbar-dark bg-dark">
        //         <div class="container-fluid">
        //             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span class="navbar-toggler-icon"></span>
        //             </button>
        //         </div>
        //     </nav>
        // </nav>
    )
}