import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { colors } from "@material-ui/core";

const { primary_accent_color } = colors;

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
            fontSize: '14px'}}>
      Log Out
    </button>
  );
};

export default LogoutButton;