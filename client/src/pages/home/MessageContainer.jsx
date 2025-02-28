import React from 'react';
import Message from '../../components/Message';
import { IoSend } from "react-icons/io5";

const MessageContainer = () => {
  return (
    <div className='flex flex-col grow ' >
      <div className="user-desc h-17 shadow-xl bottom-border px-4 flex items-center">
        <div className="avatar ">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="user-details ml-4 font-semibold text-xl">
          Stalin Patel
        </div>
      </div>
      <div className="chat-container grow px-4 h-full overflow-y-auto">
        <Message />
        <Message />

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
  );
};

export default MessageContainer;