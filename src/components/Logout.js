//notes to push to git
//used code from :  https://dev.to/sivaneshs/add-google-login-to-your-react-apps-in-10-mins-4del
import React from "react";
import { GoogleLogout } from "react-google-login";


const clientId = "922823180277-b7390ud8bf19i9b3s7a3ji1km2g1h1lo.apps.googleusercontent.com";

function Logout() {
    const onSuccess = () => {
        alert("Logout Successful");
    };
    const onFailure = (res) => {
        console.log("[Login Failed] res:", res);
    };
    return (
        <div>
            <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    );
};

export default Logout;