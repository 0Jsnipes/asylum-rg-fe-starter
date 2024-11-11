import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile-container" style={styles.container}>
        <img
          src={user.picture}
          alt={user.name}
          style={styles.profileImage}
        />
        <h2 style={styles.name}>{user.name}</h2>
        <p style={styles.email}>{user.email}</p>
      </div>
    )
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '50px auto',
  },
  profileImage: {
    borderRadius: '50%',
    width: '120px',
    height: '120px',
    objectFit: 'cover',
    marginBottom: '20px',
  },
  name: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  email: {
    fontSize: '18px',
    color: '#555',
  },
};

export default Profile;
