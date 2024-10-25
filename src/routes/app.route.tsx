import React, { Suspense, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import KitView from "views/kit";
// import PageLoaderComponent from "../hoc/pageLoaderComponent";
// import { getTimeService } from "../services/config/getTime";
// import SignInOidc from "../views/oidc/signin";
// import SignOutOidc from "../views/oidc/signout";
// import RedirectLogin from "../views/redirect";
// import ApplicationInfoNewView from "../views/ApplicationInfoNew/applicationInfo.view";
// import { getConfigData } from "../services/config/ConfigService";

// const PrivateRoutes = React.lazy(() => import("./privateRoutes"));

const AppRoute = () => {
    // const RedirectToLogin = () => {
    //     // window.location.href = getConfigData()?.config.landingLink ?? "";

    //     // return <Navigate to={"/login"} />;
    //     return <></>;
    // };

    // useEffect(() => {
    //     const handleTabFocus = () => {
    //         // getTimeService();
    //     };

    //     document.addEventListener("visibilitychange", () => {
    //         if (document.visibilityState === "hidden") {
    //             // handleTabBlur();
    //         } else if (document.visibilityState === "visible") {
    //             handleTabFocus();
    //         }
    //     });
    // }, []);

    return (
        <Suspense
            fallback={
                <></>
                // <PageLoaderComponent />
            }
        >
            <BrowserRouter>
                <Routes>
                    <Route path={"kit"} element={<KitView />} />
                    {/* <Route path={"login"} element={<ApplicationInfoNewView />} />
                    <Route path={"pv/*"} element={<PrivateRoutes />} />
                    <Route path={"signin-oidc"} element={<SignInOidc />} />
                    <Route path={"signout-oidc"} element={<SignOutOidc />} />
                    <Route path={"redirect"} element={<RedirectLogin />} />
                    <Route path="/*" element={<RedirectToLogin />} /> */}
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};

export default AppRoute;
