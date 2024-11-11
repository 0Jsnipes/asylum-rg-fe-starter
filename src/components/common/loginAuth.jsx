import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { colors } from '../../styles/data_vis_colors';

const { primary_accent_color } = colors;

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      style={{ 
        color: '#E2F0F7', 
        backgroundColor: primary_accent_color, 
        border: 'none', 
        cursor: 'pointer', 
        fontSize: '14px'}}//added the same styles to this as the header
    >
      Log In
    </button>
  );
}

export default LoginButton;
