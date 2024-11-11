import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button 
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        style={{ 
            color: '#E2F0F7', 
            backgroundColor:'#404C4A', 
            border: 'none', 
            cursor: 'pointer', 
            fontSize: '14px'}} //added same styles to this as header
            >
      Log Out
    </button>
  );
};

export default LogoutButton;