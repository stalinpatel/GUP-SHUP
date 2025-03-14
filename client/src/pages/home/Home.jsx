import React, { useEffect } from 'react';
import UserSidebar from './UserSidebar';
import MessageContainer from './MessageContainer';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsConnected, setSocketId, setOnlineUsers } from '../../store/slice/socket/socket.slice';
import { pushMessage } from '../../store/slice/message/message.slice';
import { getSocket, initializeSocket } from '../../socket/socket';

const Home = () => {
  const { isAuthenticated, userProfile } = useSelector(state => state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true })
      return;
    }
    const socket = initializeSocket(userProfile?._id)

    socket.on("connect", () => {
      // console.log('Connected to server with socket ID:', socket.id);
      dispatch(setIsConnected(true));
      dispatch(setSocketId(socket?.id))
      // socket.emit("getOnlineUsers");
    })
    socket.on('disconnect', () => {
      // console.log('Disconnected from server');
      dispatch(setIsConnected(false));
    });
    socket.on("onlineUsers", (onlineUsers) => {
      // console.log("Updated online users:", onlineUsers);
      dispatch(setOnlineUsers(onlineUsers)); // 🔥 Update Redux store
    });
    socket.on("receiveMessage", (newMsg) => {
      // console.log('new broadcase received message :', newMsg);
      dispatch(pushMessage(newMsg.message))
    })
    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off("onlineUsers");
    };

  }, [isAuthenticated, navigate, dispatch])

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