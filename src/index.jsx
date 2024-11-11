import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { useAuth0, Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Layout, Image } from 'antd';
import 'antd/dist/antd.less';
import reducer from './state/reducers';
import { colors } from './styles/data_vis_colors';

import { NotFoundPage } from './components/pages/NotFound';
import { LandingPage } from './components/pages/Landing';
import GraphsContainer from './components/pages/DataVisualizations/GraphsContainer';
import Profile from './components/common/Profile';
import { FooterContent, SubFooter } from './components/Layout/Footer';
import LoginButton from './components/common/loginAuth';
import LogoutButton from './components/common/Logout';
import Logo from './styles/Images/WhiteLogo.png';

const store = configureStore({ reducer });
const { primary_accent_color } = colors;

// Header Component
function HeaderContent() {
  const { isAuthenticated } = useAuth0();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: primary_accent_color,
        padding: '10px 20px',
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo" />
        </a>
      </div>
      <div>
        <a href="/" style={{ color: '#E2F0F7', paddingRight: '20px' }}>Home</a>
        <a href="/graphs" style={{ color: '#E2F0F7', paddingRight: '20px' }}>Graphs</a>
        <a href="/profile" style={{ color: '#E2F0F7', paddingRight: '20px' }}>Profile</a>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    </div>
  );
}

// Main App Component
function App() {
  const { Footer, Header } = Layout;

  return (
    <Layout>
      {/* Header */}
      <Header
        style={{
          height: '10vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: primary_accent_color,
        }}
      >
        <HeaderContent />
      </Header>

      {/* Main Routes */}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/graphs" component={GraphsContainer} />
        <Route
          path="/profile"
          component={withAuthenticationRequired(Profile, {
            onRedirecting: () => <div>Loading...</div>,
          })}
        />
        <Route component={NotFoundPage} />
      </Switch>

   
      <Footer style={{ backgroundColor: primary_accent_color, color: '#E2F0F7' }}>
        <FooterContent />
      </Footer>
      <Footer style={{ backgroundColor: primary_accent_color, padding: 0 }}>
        <SubFooter />
      </Footer>
    </Layout>
  );
}


ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain="dev-zb7a1c6grntli53x.us.auth0.com"
      clientId="O8ipwYTVpm3dZva6CI4m9LOpjHR6IGi8"
      authorizationParams={{
        redirect_uri: "http://localhost:3000/profile",
      }}
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  </Provider>,
  document.getElementById('root')
);
