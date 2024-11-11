import React from 'react';
import { Image } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import LoginButton from '../common/loginAuth';
import LogoutButton from '../common/Logout';

const { primary_accent_color } = colors;

function HeaderContent() {
  const { isAuthenticated } = useAuth0();
  const history = useHistory();

  const handleProfileClick = (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      history.push('/profile');
    } else {
      history.push('/login');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: primary_accent_color,
        padding: '10px 20px',
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div>
        <Link to="/" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
          Home
        </Link>
        <Link to="/graphs" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
          Graphs
        </Link>
        <a
          href="/profile"
          onClick={handleProfileClick}
          style={{ color: '#E2F0F7', cursor: 'pointer', paddingRight: '75px' }}
        >
          Profile
        </a>
        {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
      </div>
    </div>
  );
}

export { HeaderContent };
