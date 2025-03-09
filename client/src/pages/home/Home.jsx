import React from 'react';
import UserSidebar from './UserSidebar';
import MessageContainer from './MessageContainer';


const Home = () => {

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