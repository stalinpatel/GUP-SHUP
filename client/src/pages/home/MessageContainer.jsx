import React, { useEffect } from 'react';
import IntroPage from './IntroPage';
import { IoSend } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { loadConversation } from '../../store/slice/message/message.thunk';
import ChatsContainer from './components/ChatsContainer';


const MessageContainer = () => {
  const { selectedUser } = useSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    const getMessages = async () => {
      await dispatch(loadConversation({ participantId: selectedUser?._id }))
    }
    if (selectedUser?._id) {
      getMessages();
    }
  }, [selectedUser])

  if (selectedUser) {
    return (
      <div className='flex flex-col grow ' >
        <div className="user-desc h-17 shadow-xl bottom-border px-4 flex items-center">
          <div className="avatar ">
            <div className="w-12 rounded-full">
              <img src={selectedUser?.avatar} alt='Avatar' />
            </div>
          </div>
          <div className="user-details ml-4 font-semibold text-xl">
            {selectedUser?.fullName}
          </div>
        </div>
        <div className="chat-container grow px-4 h-full overflow-y-auto">
          <ChatsContainer />
        </div>
        <div className="message-input-box bottom-border h-16 flex items-center relative">
          <input
            type="text"
            required
            className="outline-none border-none px-4 w-full h-full  bg-base-300"
            placeholder="Type a message..."
          />
          <button className="btn btn-sm btn-ghost absolute right-6 scale-150">
            <IoSend />
          </button>
        </div>
      </div>
    )
  }
  return (
    <IntroPage />
  );
};

export default MessageContainer;