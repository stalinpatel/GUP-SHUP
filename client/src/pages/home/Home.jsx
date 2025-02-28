import React from 'react';
import UserSidebar from './UserSidebar';
import MessageContainer from './MessageContainer';

const Home = () => {
  return (
    <>
      <div className="flex max-w-full h-[calc(100vh-theme(height.16)-theme(height.2))]">
        <UserSidebar />
        <MessageContainer />
      </div>
    </>
  );
};

export default Home;