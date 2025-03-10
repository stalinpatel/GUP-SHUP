import React from 'react';
import { useSelector } from 'react-redux';

const Message = ({ messageDetails }) => {
    const { userProfile } = useSelector(state => state.user)
    const isSender = messageDetails.senderId === userProfile._id;
    const sentAt = new Date(messageDetails.createdAt).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
    return (
        <div>
            <div className={`chat ${isSender ? "chat-end" : "chat-start"}`}>
                <div className="chat-bubble flex flex-col gap-x-1 pb-0">
                    <div className="content">
                        {messageDetails.message}
                    </div>
                    <div className='flex py-1 justify-end items-end '>
                        <div className="text-xs opacity-50">{sentAt}</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Message;