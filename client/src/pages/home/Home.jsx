import React, { useEffect } from 'react';
import UserSidebar from './UserSidebar';
import MessageContainer from './MessageContainer';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import socket from "../../socket/socket"
import { setIsConnected } from '../../store/slice/socket/socket.slice';


const Home = () => {
  const { isAuthenticated } = useSelector(state => state.user)
  const { socketslice } = useSelector(state => state.socket)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true })
    }
    socket.on("connect", () => {
      console.log('Connected to server with socket ID:', socket.id);
      dispatch(setConnected(true));
    })
    socket.on('disconnect', () => {
      console.log('Disconnected from server');
      dispatch(setConnected(false));
    });
    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };

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