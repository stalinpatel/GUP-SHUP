import React, { useEffect } from 'react';
import UserSidebar from './UserSidebar';
import MessageContainer from './MessageContainer';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { isAuthenticated } = useSelector(state => state.user)
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true })
    }
  }, [isAuthenticated, navigate])

  // ⬇️ Prevent rendering if not authenticated (optional optimization)
  if (!isAuthenticated) return null;

  return (
    <>
      <div className="flex max-w-full h-screen">
        <UserSidebar />
        <MessageContainer />
      </div>
    </>
  );
};

export default Home;